pipeline {
	agent any
	stages {
		stage('Install dependencies') {
			steps {
			bat 'npm install'
		     }
	    }
		stage('Execute tests') {
			steps {
			bat 'npm test'
		     }
	    } 
    }
}
