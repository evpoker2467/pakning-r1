# PAKNING R1 AI Chat Application

An advanced AI chat application with reasoning capabilities, designed for problem-solving and thoughtful responses.

## Features

- Two reasoning modes: Default and DeepThink
- Modern responsive UI with light/dark themes
- Collapsible sidebar with chat history
- API integration with Qwen AI

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