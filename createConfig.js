// createConfig.js
const fs = require('fs');

const config = {
    compilerOptions: {
        target: "es5",
        lib: ["es2015", "dom"],
        module: "commonjs",
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true
    }
};

fs.writeFileSync('tsconfig.json', JSON.stringify(config, null, 2), 'utf-8');

console.log('Arquivo tsconfig.json criado com sucesso!');