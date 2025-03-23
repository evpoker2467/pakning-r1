# PAKNING R1 - Advanced AI Assistant

## Setup

### API Key Configuration

To use this application, you need to set up your API key:

1. Create a `.env` file in the root directory
2. Add your OpenRouter API key in the following format:
   ```
   API_KEY=your-api-key-here
   ```
3. Alternatively, you can enter your API key in the application when prompted

## Running the Application

1. Open `index.html` in a web browser
2. If no API key is found, you will be prompted to enter one
3. Start chatting with PAKNING R1

## Features

- Advanced reasoning AI with two different thinking modes
- Chat history with saving/loading functionality 
- Responsive design for desktop and mobile use
- Light/dark theme support

## Deployment

### Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR_REPOSITORY_URL)

### Manual Deployment Steps

1. **Prerequisites**:
   - Git installed
   - GitHub, GitLab, or Bitbucket account
   - Netlify account (sign up at [netlify.com](https://netlify.com))

2. **Push Your Code to Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

3. **Deploy on Netlify**:
   - Log in to Netlify
   - Click "New site from Git"
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authorize Netlify and select your repository
   - Configure build settings:
     - Build command: leave empty (not required for this app)
     - Publish directory: `.`
   - Click "Deploy site"

4. **Configure Domain (Optional)**:
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow the steps to configure your domain

## Development

### How to Run Locally

1. Clone the repository:
   ```bash
   git clone YOUR_REPOSITORY_URL
   cd pakning-r1
   ```

2. Open `index.html` in a browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server
   
   # Or using Node.js http-server
   npx http-server
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 