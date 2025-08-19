const regionMap = {
  hk: /港|hk|🇭🇰/i,
  tw: /台|tw|🇨🇳/i,
  jp: /日|jp|🇯🇵/i,
  sg: /新|sg|🇸🇬/i,
  us: /美|us|🇺🇸/i,
}

const originalName = $server.name

let regionCode
for (const [code, regex] of Object.entries(regionMap)) {
  if (regex.test(originalName)) {
    regionCode = code
    break
  }
}

let newName = `[${$arguments.name}] ${regionCode}`

// Check for special tags
if (/高速/i.test(originalName)) {
  newName += ' exp'
} else if (/专线/i.test(originalName)) {
  newName += ' ded'
}

// Extract number
const numberMatch = originalName.match(/(\d+)/)
if (numberMatch) {
  newName += ` ${numberMatch[1]}`
}

$server.name = newName
