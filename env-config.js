// Function to load environment variables
async function loadEnvironmentVariables() {
    // Check for Netlify environment variables
    if (window.netlifyIdentity) {
        console.log('Using Netlify environment variables');
        // In production with Netlify, environment variables will be injected
        return {};
    }
    
    // Fallback to local .env file
    return loadEnvFile();
}

// Simple .env file parser for local development
function loadEnvFile() {
    return fetch('.env')
        .then(response => {
            if (!response.ok) {
                console.warn('Failed to load .env file');
                return {};
            }
            return response.text();
        })
        .then(text => {
            if (typeof text === 'object') {
                // This means we're returning a mock environment
                return text;
            }
            
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
        window.envVars = await loadEnvironmentVariables();
    }
    
    return window.envVars[key] || defaultValue;
} 