import fs from 'fs'
import readline from 'readline'
import path from 'path'

async function parseChat() {
  const chatPath = path.resolve('c:\\Users\\DELL\\OneDrive\\Desktop\\J&S Memories\\whatsapp-extract\\WhatsApp Chat with 〽️annu.txt')
  console.log('Reading from:', chatPath)

  const fileStream = fs.createReadStream(chatPath, 'utf8')
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  const messages = []
  let currentMsg = null
  let idCounter = 1

  // Regex matches: "8/5/23, 5:58 PM - Junaid: Hi"
  // Allow for any weird unicode spaces between time and AM/PM
  const msgRegex = /^(\d{1,2}\/\d{1,2}\/\d{2,4}),\s*(\d{1,2}:\d{2}.*?)\s*-\s*([^:]+):\s*(.*)$/
  const sysRegex = /^(\d{1,2}\/\d{1,2}\/\d{2,4}),\s*(\d{1,2}:\d{2}.*?)\s*-\s*(.*)$/

  for await (const line of rl) {
    const match = line.match(msgRegex)
    
    if (match) {
      if (currentMsg) {
        messages.push(currentMsg)
      }
      
      let [_, date, timeRaw, senderRaw, text] = match
      
      // Clean time (strip hidden characters)
      let time = timeRaw.replace(/[^\d:APMampm\s]/g, '').trim()
      
      // Normalize sender
      let sender = senderRaw.includes('Junaid') ? 'me' : 'them'
      
      currentMsg = {
        id: `msg-${idCounter++}`,
        date,
        time,
        sender,
        text
      }
    } else {
      // Check if it's a system message
      const sysMatch = line.match(sysRegex)
      if (sysMatch && !sysMatch[3].includes(':')) {
        // Skip system message
        continue
      }
      
      // Continuation of previous message
      if (currentMsg) {
        currentMsg.text += '\n' + line
      }
    }
  }

  if (currentMsg) {
    messages.push(currentMsg)
  }

  const outDir = path.resolve('public', 'data')
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }
  
  const outFile = path.join(outDir, 'all_messages.json')
  fs.writeFileSync(outFile, JSON.stringify(messages))
  
  console.log(`Successfully parsed ${messages.length} messages.`)
  console.log(`Saved to ${outFile}`)
}

parseChat().catch(console.error)
