import { IQuestions } from '../../../../../redux/slices/questions/questionsSlice';

export const rolePreset: Record<string, string> = {
  software_engineer: 'Software Engineer',
  security_engineer: 'Security Engineer',
  product_manager: 'Product Manager',
  data_scientist: 'Data Scientist',
  devops_engineer: 'Devops Engineer'
};

export const roleLists = [
  {
    label: 'Software Engineer',
    value: 'software_engineer',
    id: 'SE'
  },
  {
    label: 'Security Engineer',
    value: 'security_engineer',
    id: 'SEC'
  },
  {
    label: 'Product Manager',
    value: 'product_manager',
    id: 'PM'
  },
  {
    label: 'Data Scientist',
    value: 'data_scientist',
    id: 'DS'
  },
  {
    label: 'DevOps Engineer',
    value: 'devops_engineer',
    id: 'DE'
  }
];

type SecurityQuestions = {
  [role: string]: IQuestions[];
};

export const securityQuestions: SecurityQuestions = {
  software_engineer: [
    {
      question:
        'What should a software engineer do if they receive an unsolicited email with an attachment?',
      options: [
        'a. Open the attachment to see what it is',
        'b. Delete the email without opening it',
        'c. Forward the email to the security team',
        'd. Reply asking for more details about the attachment'
      ],
      answer: 'b. Delete the email without opening it',
      selectedAnswer: ''
    },
    {
      question: 'Which of the following is a secure coding practice?',
      options: [
        'a. Storing passwords in plain text',
        'b. Using hardcoded API keys in source code',
        'c. Validating all user inputs',
        'd. Disabling encryption for performance'
      ],
      answer: 'c. Validating all user inputs',
      selectedAnswer: ''
    },
    {
      question: 'What is Cross-Site Scripting (XSS)?',
      options: [
        'a. A form of phishing',
        'b. An attack where malicious scripts are injected into trusted websites',
        'c. A type of denial-of-service attack',
        'd. A way to encrypt web traffic'
      ],
      answer: 'b. An attack where malicious scripts are injected into trusted websites',
      selectedAnswer: ''
    },
    {
      question: 'How should sensitive data be handled in a web application?',
      options: [
        'a. Store it in local storage',
        'b. Store it in a secured, encrypted format',
        'c. Store it in plain text in the database',
        'd. Encrypt it only during transmission'
      ],
      answer: 'b. Store it in a secured, encrypted format',
      selectedAnswer: ''
    },
    {
      question: 'What is the best practice for using third-party libraries in your code?',
      options: [
        'a. Download the latest version without review',
        'b. Regularly update and review for vulnerabilities',
        'c. Only use popular libraries regardless of security',
        'd. Never use third-party libraries'
      ],
      answer: 'b. Regularly update and review for vulnerabilities',
      selectedAnswer: ''
    },
    {
      question: 'What is SQL Injection?',
      options: [
        'a. A way to secure database queries',
        'b. An attack that allows the execution of arbitrary SQL code on a server',
        'c. A method of encrypting database connections',
        'd. A type of denial-of-service attack'
      ],
      answer: 'b. An attack that allows the execution of arbitrary SQL code on a server',
      selectedAnswer: ''
    },
    {
      question: 'How often should you rotate your API keys and secrets?',
      options: [
        'a. Every year',
        'b. Never, once they are created',
        'c. Regularly, or whenever there is a security breach',
        'd. Only when there is an issue with the API'
      ],
      answer: 'c. Regularly, or whenever there is a security breach',
      selectedAnswer: ''
    },
    {
      question: 'Why should sensitive information never be logged?',
      options: [
        'a. It can clutter your logs',
        'b. Logging can be slow',
        'c. It exposes sensitive data if logs are accessed or leaked',
        'd. It is not necessary for debugging'
      ],
      answer: 'c. It exposes sensitive data if logs are accessed or leaked',
      selectedAnswer: ''
    },
    {
      question: 'What is the purpose of code reviews from a security perspective?',
      options: [
        'a. To find bugs in the application',
        'b. To enforce coding style guidelines',
        'c. To identify potential security vulnerabilities in the code',
        'd. To optimize performance'
      ],
      answer: 'c. To identify potential security vulnerabilities in the code',
      selectedAnswer: ''
    },
    {
      question: 'What is the principle of least privilege?',
      options: [
        'a. Giving all employees full access to all systems',
        'b. Giving users only the permissions they need to perform their tasks',
        'c. Restricting access to junior employees only',
        'd. Limiting access to third-party vendors'
      ],
      answer: 'b. Giving users only the permissions they need to perform their tasks',
      selectedAnswer: ''
    }
  ],
  product_manager: [
    {
      question: 'What is the most important security consideration when gathering customer data?',
      options: [
        'a. Storing all data in plain text',
        'b. Minimizing data collection and ensuring compliance with regulations',
        'c. Sharing data with third-party vendors without consent',
        'd. Keeping all data in one place for easy access'
      ],
      answer: 'b. Minimizing data collection and ensuring compliance with regulations',
      selectedAnswer: ''
    },
    {
      question: 'How should a Product Manager handle a security vulnerability report?',
      options: [
        'a. Ignore it unless it’s critical',
        'b. Communicate it immediately to the development and security teams',
        'c. Review it after the next product release',
        'd. Only address it if customers complain'
      ],
      answer: 'b. Communicate it immediately to the development and security teams',
      selectedAnswer: ''
    },
    {
      question: 'What is GDPR?',
      options: [
        'a. A set of guidelines for securing APIs',
        'b. A regulation for protecting customer data and privacy in the EU',
        'c. A type of encryption algorithm',
        'd. A method for secure data storage'
      ],
      answer: 'b. A regulation for protecting customer data and privacy in the EU',
      selectedAnswer: ''
    },
    {
      question:
        'Why is it important to implement multi-factor authentication (MFA) for your product?',
      options: [
        'a. It’s a trendy security feature',
        'b. It ensures that only authorized users can access the system',
        'c. It’s a way to improve user experience',
        'd. It helps track users'
      ],
      answer: 'b. It ensures that only authorized users can access the system',
      selectedAnswer: ''
    },
    {
      question:
        'What should be done if a security vulnerability is found in a third-party service your product relies on?',
      options: [
        'a. Ignore the vulnerability if the product works fine',
        'b. Work with the vendor to fix the vulnerability immediately',
        'c. Remove the service from the product without notifying users',
        'd. Continue using it and address the issue later'
      ],
      answer: 'b. Work with the vendor to fix the vulnerability immediately',
      selectedAnswer: ''
    },
    {
      question: 'What is social engineering?',
      options: [
        'a. A type of technical attack',
        'b. An attempt to manipulate individuals into divulging confidential information',
        'c. A way to protect sensitive data',
        'd. A method for training users on security best practices'
      ],
      answer: 'b. An attempt to manipulate individuals into divulging confidential information',
      selectedAnswer: ''
    },
    {
      question: 'Why is security testing important during product development?',
      options: [
        'a. It helps identify design flaws',
        'b. It ensures performance optimization',
        'c. It helps identify and fix vulnerabilities before the product is launched',
        'd. It ensures compatibility with multiple platforms'
      ],
      answer: 'c. It helps identify and fix vulnerabilities before the product is launched',
      selectedAnswer: ''
    },
    {
      question: 'How often should a product’s security be audited?',
      options: [
        'a. Once a year',
        'b. After every major release or update',
        'c. Never, unless there’s a breach',
        'd. Only when requested by customers'
      ],
      answer: 'b. After every major release or update',
      selectedAnswer: ''
    },
    {
      question: 'What is the role of encryption in securing data?',
      options: [
        'a. It prevents unauthorized access to sensitive data',
        'b. It speeds up data transmission',
        'c. It’s a backup method for data recovery',
        'd. It’s used for compressing data'
      ],
      answer: 'a. It prevents unauthorized access to sensitive data',
      selectedAnswer: ''
    },
    {
      question: 'What is the best way to respond to a data breach?',
      options: [
        'a. Hide the breach and fix it quietly',
        'b. Notify affected customers and regulatory bodies immediately',
        'c. Blame it on third-party services',
        'd. Ignore it if no data seems to be lost'
      ],
      answer: 'b. Notify affected customers and regulatory bodies immediately',
      selectedAnswer: ''
    }
  ],
  data_scientist: [
    {
      question: 'What should be done when handling sensitive data in a machine learning model?',
      options: [
        'a. Anonymizing or pseudonymizing sensitive data',
        'b. Storing it in plaintext within the model',
        'c. Sharing the data with all team members',
        'd. Ignoring data privacy regulations'
      ],
      answer: 'a. Anonymizing or pseudonymizing sensitive data',
      selectedAnswer: ''
    },
    {
      question: 'What is the risk of using open-source data for training models?',
      options: [
        'a. It might contain sensitive or personal information',
        'b. It improves security automatically',
        'c. It eliminates the need for data validation',
        'd. It ensures compliance with data privacy laws'
      ],
      answer: 'a. It might contain sensitive or personal information',
      selectedAnswer: ''
    },
    {
      question: 'Which of the following should be avoided when sharing datasets?',
      options: [
        'a. Sharing data without proper access controls',
        'b. Encrypting the data before sharing',
        'c. Applying data anonymization techniques',
        'd. Using secure data transfer methods'
      ],
      answer: 'a. Sharing data without proper access controls',
      selectedAnswer: ''
    },
    {
      question: 'What is a key security risk when dealing with big data?',
      options: [
        'a. Data breaches due to improper access controls',
        'b. Data securely stored in encrypted form',
        'c. Lack of sufficient storage capacity',
        'd. Increased computational power'
      ],
      answer: 'a. Data breaches due to improper access controls',
      selectedAnswer: ''
    },
    {
      question: 'Why is data anonymization important in data science?',
      options: [
        'a. To improve model accuracy',
        'b. To comply with privacy laws like GDPR',
        'c. To avoid data storage costs',
        'd. To speed up model training'
      ],
      answer: 'b. To comply with privacy laws like GDPR',
      selectedAnswer: ''
    },
    {
      question: 'What should you do if sensitive data is unintentionally included in a dataset?',
      options: [
        'a. Immediately remove or anonymize the sensitive data',
        'b. Leave it as is for model accuracy',
        'c. Share the dataset with stakeholders without informing them',
        'd. Store the data in plaintext for easy access'
      ],
      answer: 'a. Immediately remove or anonymize the sensitive data',
      selectedAnswer: ''
    },
    {
      question: 'What is the purpose of encryption when handling large datasets?',
      options: [
        'a. To compress the data for faster processing',
        'b. To secure sensitive data both at rest and in transit',
        'c. To speed up the analytics process',
        'd. To improve dataset size limits'
      ],
      answer: 'b. To secure sensitive data both at rest and in transit',
      selectedAnswer: ''
    },
    {
      question: 'How should you handle third-party data integrations in a data science project?',
      options: [
        'a. Ensure compliance with privacy policies and agreements',
        'b. Use any data freely without checking for privacy issues',
        'c. Store third-party data without encryption',
        'd. Allow all team members access to third-party datasets'
      ],
      answer: 'a. Ensure compliance with privacy policies and agreements',
      selectedAnswer: ''
    },
    {
      question: 'What is model inversion, a security risk in machine learning?',
      options: [
        'a. A method to reconstruct training data from a model’s outputs',
        'b. A technique to invert data pre-processing',
        'c. A feature scaling technique',
        'd. A way to reverse model accuracy'
      ],
      answer: 'a. A method to reconstruct training data from a model’s outputs',
      selectedAnswer: ''
    },
    {
      question:
        'Which of the following is a data privacy risk when deploying a machine learning model?',
      options: [
        'a. The model might leak sensitive information from the training data',
        'b. The model improves privacy through data sharing',
        'c. The model prevents any access to underlying data',
        'd. The model automates privacy protection'
      ],
      answer: 'a. The model might leak sensitive information from the training data',
      selectedAnswer: ''
    }
  ],
  devops_engineer: [
    {
      question:
        'What is the primary security risk in a continuous integration/continuous deployment (CI/CD) pipeline?',
      options: [
        'a. Hardcoding credentials in configuration files',
        'b. Automating deployment tasks',
        'c. Using version control',
        'd. Regular code reviews'
      ],
      answer: 'a. Hardcoding credentials in configuration files',
      selectedAnswer: ''
    },
    {
      question: 'What is the best practice for managing access to cloud infrastructure?',
      options: [
        'a. Granting access based on least privilege',
        'b. Giving full access to everyone on the team',
        'c. Sharing passwords via email',
        'd. Using the same credentials across environments'
      ],
      answer: 'a. Granting access based on least privilege',
      selectedAnswer: ''
    },
    {
      question: 'Which of the following is a secure way to store sensitive environment variables?',
      options: [
        'a. Using a secrets management tool',
        'b. Including them directly in the codebase',
        'c. Hardcoding them into the deployment script',
        'd. Sharing them with the entire team'
      ],
      answer: 'a. Using a secrets management tool',
      selectedAnswer: ''
    },
    {
      question:
        'What is the main purpose of infrastructure as code (IaC) from a security perspective?',
      options: [
        'a. Automating infrastructure provisioning while applying consistent security policies',
        'b. Allowing manual changes to infrastructure',
        'c. Avoiding security policies altogether',
        'd. Reducing the cost of infrastructure deployment'
      ],
      answer:
        'a. Automating infrastructure provisioning while applying consistent security policies',
      selectedAnswer: ''
    },
    {
      question: 'What is a common security vulnerability in containerized applications?',
      options: [
        'a. Using untrusted base images with vulnerabilities',
        'b. Securing images through encryption',
        'c. Isolating containers with namespaces',
        'd. Running containers in a private cloud'
      ],
      answer: 'a. Using untrusted base images with vulnerabilities',
      selectedAnswer: ''
    },
    {
      question: 'Which security measure can prevent unauthorized access to a Kubernetes cluster?',
      options: [
        'a. Role-based access control (RBAC)',
        'b. Running the cluster without any network policies',
        'c. Allowing unrestricted access to all namespaces',
        'd. Storing sensitive credentials in plaintext in config files'
      ],
      answer: 'a. Role-based access control (RBAC)',
      selectedAnswer: ''
    },
    {
      question: 'What should be done to secure SSH access to cloud instances?',
      options: [
        'a. Using SSH key pairs instead of passwords',
        'b. Disabling SSH access altogether',
        'c. Sharing the root password with the team',
        'd. Using the same password for all instances'
      ],
      answer: 'a. Using SSH key pairs instead of passwords',
      selectedAnswer: ''
    },
    {
      question: 'What is the risk of not patching vulnerabilities in third-party dependencies?',
      options: [
        'a. The system may be exploited due to known vulnerabilities',
        'b. Improved system performance',
        'c. Reduced maintenance costs',
        'd. Increased security by not updating'
      ],
      answer: 'a. The system may be exploited due to known vulnerabilities',
      selectedAnswer: ''
    },
    {
      question: 'How can you prevent man-in-the-middle (MITM) attacks during deployments?',
      options: [
        'a. Using encrypted connections like TLS for all communications',
        'b. Disabling encryption for faster deployment',
        'c. Using HTTP instead of HTTPS',
        'd. Sharing credentials over public networks'
      ],
      answer: 'a. Using encrypted connections like TLS for all communications',
      selectedAnswer: ''
    },
    {
      question: 'What is the best approach to securing DevOps toolchains?',
      options: [
        'a. Regularly auditing and updating toolchains for security vulnerabilities',
        'b. Ignoring toolchain security to speed up processes',
        'c. Allowing unrestricted access to all DevOps tools',
        'd. Using outdated tools for cost savings'
      ],
      answer: 'a. Regularly auditing and updating toolchains for security vulnerabilities',
      selectedAnswer: ''
    }
  ],
  security_engineer: [
    {
      question: 'What is the first step in responding to a security breach?',
      options: [
        'a. Immediately shutting down all systems',
        'b. Notifying law enforcement',
        'c. Identifying the affected systems and isolating them',
        'd. Deleting all logs to hide traces of the breach'
      ],
      answer: 'c. Identifying the affected systems and isolating them',
      selectedAnswer: ''
    },
    {
      question: 'Which of the following is considered a best practice for password security?',
      options: [
        'a. Using multi-factor authentication (MFA)',
        'b. Sharing passwords via email',
        'c. Storing passwords in a text file on the desktop',
        'd. Using the same password across all systems'
      ],
      answer: 'a. Using multi-factor authentication (MFA)',
      selectedAnswer: ''
    },
    {
      question: 'What is the purpose of a firewall in network security?',
      options: [
        'a. To monitor and block unauthorized access to a network',
        'b. To accelerate data transmission across the network',
        'c. To store user passwords securely',
        'd. To disable all network traffic'
      ],
      answer: 'a. To monitor and block unauthorized access to a network',
      selectedAnswer: ''
    },
    {
      question: 'What is the key benefit of encryption for data at rest?',
      options: [
        'a. Preventing unauthorized access to stored data',
        'b. Increasing data processing speed',
        'c. Allowing open access to data by all users',
        'd. Reducing storage costs'
      ],
      answer: 'a. Preventing unauthorized access to stored data',
      selectedAnswer: ''
    },
    {
      question:
        'Which of the following is a common vulnerability that can be exploited by attackers?',
      options: [
        'a. Unpatched software or outdated systems',
        'b. Using complex passwords',
        'c. Enforcing multi-factor authentication',
        'd. Running regular security audits'
      ],
      answer: 'a. Unpatched software or outdated systems',
      selectedAnswer: ''
    },
    {
      question: 'What is a key risk associated with improper configuration of cloud services?',
      options: [
        'a. Exposure of sensitive data to unauthorized users',
        'b. Increased system performance',
        'c. Automatic scaling of resources',
        'd. Enhanced data encryption'
      ],
      answer: 'a. Exposure of sensitive data to unauthorized users',
      selectedAnswer: ''
    },
    {
      question: 'How can an organization defend against phishing attacks?',
      options: [
        'a. Conducting regular security awareness training',
        'b. Sharing login credentials openly within the team',
        'c. Ignoring suspicious emails',
        'd. Using only simple email filters'
      ],
      answer: 'a. Conducting regular security awareness training',
      selectedAnswer: ''
    },
    {
      question:
        'What is the primary function of a security information and event management (SIEM) system?',
      options: [
        'a. To detect, analyze, and respond to security threats in real-time',
        'b. To backup and restore lost data',
        'c. To generate random passwords for users',
        'd. To encrypt data across the network'
      ],
      answer: 'a. To detect, analyze, and respond to security threats in real-time',
      selectedAnswer: ''
    },
    {
      question: 'What is a zero-day vulnerability?',
      options: [
        'a. A vulnerability that has been publicly disclosed but not yet patched',
        'b. A fully patched system vulnerability',
        'c. A vulnerability that is known to attackers but not security engineers',
        'd. A known vulnerability that has been resolved'
      ],
      answer: 'a. A vulnerability that has been publicly disclosed but not yet patched',
      selectedAnswer: ''
    },
    {
      question:
        'Which of the following methods helps prevent brute force attacks on login systems?',
      options: [
        'a. Implementing account lockout policies after multiple failed attempts',
        'b. Using simple passwords',
        'c. Disabling two-factor authentication',
        'd. Allowing unlimited login attempts'
      ],
      answer: 'a. Implementing account lockout policies after multiple failed attempts',
      selectedAnswer: ''
    }
  ]
};
