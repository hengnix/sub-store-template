const regionMap = {
  '🇭🇰': /港|hk|Hong Kong/i,
  '🇨🇳': /台|tw|Taiwan/i,
  '🇯🇵': /日|jp|Japan/i,
  '🇸🇬': /新|sg|Singapore/i,
  '🇺🇸': /美|us|United States/i,
}

const originalName = $server.name

let regionFlag
for (const [flag, regex] of Object.entries(regionMap)) {
  if (regex.test(originalName)) {
    regionFlag = flag
    break
  }
}

let newName = `[${$arguments.name}] ${regionFlag}`

// Check for special tags
if (/高速/i.test(originalName)) {
  newName += ' exp'
}

// Extract number
const numberMatch = originalName.match(/(\d+)/)
if (numberMatch) {
  newName += ` ${numberMatch[1]}`
}

$server.name = newName
