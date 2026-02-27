pipeline {
    agent any

    /* This block tells Jenkins to use the Node.js version 
    configured in 'Global Tool Configuration'. 
    Make sure the name 'node20' matches what you set up there.
    */
    tools {
        nodejs 'node20' 
    }

    stages {
        stage("Checkout") {
            steps {
                // This pulls your code from GitHub
                checkout scm
            }
        }

        stage("Install Dependencies") {
            steps {
                // Just 'npm install' - it reads your package.json
                sh 'npm install'
            }
        }

        stage("Test") {
            steps {
                // Runs the 'test' script defined in your package.json
                sh 'npm test'
            }
        }

        stage("Build") {
            steps {
                // Runs the 'build' script (usually for React/Production)
                sh 'npm run build'
            }
        }

        stage("Build Image") {
            steps {
                sh 'docker build -t my-express-app:1.0 .'
            }
        }
    }
}