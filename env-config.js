// Function to get environment variables from Netlify
async function getEnvVar(key, defaultValue = '') {
    if (window.envVars === undefined) {
        // In Netlify environment, variables are injected at build time
        console.log('Initializing environment variables from Netlify');
        window.envVars = {
            // Netlify will replace this at build time with actual environment variables
            API_KEY: process.env.API_KEY || ''
        };
    }
    
    return window.envVars[key] || defaultValue;
} 