pipeline{
    
    agent {
        label 'local-docker-agent'
    }
    
    stages {
        
        stage("Greet")
        {
            steps{
                sh "echo $HOME"
                echo "Running in docker agent"
            }
        }
        stage("Clone") {
            steps {
                git url: "${repo}", 
                    branch: 'main', 
                    credentialsId: 'jenkins-ghid' // Use the ID you created
                sh "ls"
            }
        }
    }
    
}
