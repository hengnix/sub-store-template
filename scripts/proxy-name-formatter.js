const regionMap = {
  '🇭🇰': { regex: /港|hk|Hong Kong/i, code: 'HK' },
  '🇨🇳': { regex: /台|tw|Taiwan/i, code: 'TW' },
  '🇸🇬': { regex: /新|sg|Singapore/i, code: 'SG' },
  '🇯🇵': { regex: /日|jp|Japan/i, code: 'JP' },
  '🇺🇸': { regex: /美|us|United States/i, code: 'US' },
}

const originalName = $server.name

let regionFlag = ''
let regionCode = ''

for (const [flag, { regex, code }] of Object.entries(regionMap)) {
  if (regex.test(originalName)) {
    regionFlag = flag
    regionCode = code
    break
  }
}

let newName = `[${$arguments.name}] ${regionFlag} ${regionCode}`

const numberMatch = originalName.match(/(\d+)/)
if (numberMatch) {
  newName += ` ${numberMatch[1]}`
}

$server.name = newName
