// Function to get environment variables from Netlify
async function getEnvVar(key, defaultValue = '') {
    if (window.envVars === undefined) {
        // In Netlify environment, variables are injected at build time
        console.log('Initializing environment variables from Netlify');
        
        // This is where we'll store environment variables
        window.envVars = {};
        
        // Check if we're in a Netlify environment
        try {
            // For Netlify, API_KEY should be replaced at build time
            // The API_KEY below will be replaced with the actual value during Netlify build
            window.envVars.API_KEY = 'NETLIFY_ENV_API_KEY_PLACEHOLDER';
            
            // Replace the placeholder with actual value from Netlify
            if (window.envVars.API_KEY === 'NETLIFY_ENV_API_KEY_PLACEHOLDER') {
                console.warn('Environment variables not replaced at build time');
                window.envVars.API_KEY = '';
            }
        } catch (error) {
            console.error('Error accessing environment variables:', error);
            window.envVars.API_KEY = '';
        }
    }
    
    return window.envVars[key] || defaultValue;
} 