@Library("shared-library") _
pipeline {
    agent { label "express"}
    
    stages {
        stage("Code checkout") {
            steps {
                script {
                    clone("https://github.com/azhar-danish/simpleExpressProgram.git","main")
                }
            }
        }
        stage("Code Build") {
            steps {
                script {
                    build("express-app","2.0")
                }
            }
        }
        stage("Push Docker Image") {
            steps {
                echo "pushing image to docker hub"
                script {
                    push_image("express-app","2.0")
                }
            }
        }
        stage("Code Test") {
            steps {
                echo "Code testing"
            }
        }
        stage("Code Deploy") {
            steps {
                echo "Code deploy"
                // sh "docker stop express-app && docker rm express-app"
                // sh "docker run -d -p 3000:3000 --name express-app" //
                
                script {
                    deploy("express-app",3000,"2.0")
                }
            }
        }
    }
}
