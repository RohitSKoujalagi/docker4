pipeline{
    
    agent {
        label 'local-docker-agent'
    }
    
    stages {
        
        stage("Greet")
        {
            steps{
                sh "echo Hello"
                echo "Running in docker agent"
            }
        }
        stage("Clone") {
            steps {
                git url: "https://github.com/RohitSKoujalagi/docker4.git", 
                    branch: 'main', 
                    credentialsId: 'jenkins-ghid' // Use the ID you created
                sh "ls"
            }
        }
    }
    
}
