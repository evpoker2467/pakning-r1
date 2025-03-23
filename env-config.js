// Simple .env file parser
function loadEnvFile() {
    return fetch('.env')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load .env file');
            }
            return response.text();
        })
        .then(text => {
            const envVars = {};
            const lines = text.split('\n');
            
            for (const line of lines) {
                const trimmedLine = line.trim();
                // Skip empty lines and comments
                if (!trimmedLine || trimmedLine.startsWith('#')) {
                    continue;
                }
                
                // Parse KEY=VALUE format
                const separatorIndex = trimmedLine.indexOf('=');
                if (separatorIndex > 0) {
                    const key = trimmedLine.substring(0, separatorIndex).trim();
                    const value = trimmedLine.substring(separatorIndex + 1).trim();
                    
                    // Remove quotes if present
                    envVars[key] = value.replace(/^['"]|['"]$/g, '');
                }
            }
            
            return envVars;
        })
        .catch(error => {
            console.error('Error loading .env file:', error);
            return {};
        });
}

// Function to get environment variable
async function getEnvVar(key, defaultValue = '') {
    if (window.envVars === undefined) {
        window.envVars = await loadEnvFile();
    }
    
    return window.envVars[key] || defaultValue;
} 