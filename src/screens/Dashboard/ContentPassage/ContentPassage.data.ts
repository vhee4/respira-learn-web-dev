export const contentBasedOnRole: Record<string, string> = {
  software_engineer: `
                        Imagine you're a software engineer, and one morning you receive an email from an unfamiliar sender with an attachment. 
                        You’re unsure what it is, but you know the risks of phishing attacks and malware. The best course of action? <span style="color: yellow; font-weight: 700;">Forward the email to the security team</span>. 
                        They’re trained to investigate suspicious emails without putting the network at risk. Opening the attachment or replying to the email 
                        could introduce malware into the system, while deleting the email might prevent further analysis.<br /><br />
                        As you move on to your daily coding tasks, you recall an important rule about secure coding practices: always <span style="color: yellow; font-weight: 700;">validate all user inputs</span>. 
                        This is key to preventing vulnerabilities like SQL injection, where attackers can manipulate input 
                        fields to access or corrupt your database. Storing passwords in plain text or hardcoding API keys in your source code are major security risks, as attackers can easily exploit these weaknesses if they gain access to your system. 
                        Ensuring data is properly validated and sensitive information is protected are foundational to secure development.<br /><br />
                        Speaking of vulnerabilities, consider <span style="color: yellow; font-weight: 700;">Cross-Site Scripting (XSS)</span>. This occurs when attackers inject malicious scripts into a trusted website. Users unknowingly execute these scripts when they interact with the site, 
                        allowing the attacker to steal cookies, session tokens, or other sensitive information. XSS can be prevented by sanitizing and validating user input to ensure no malicious code is embedded in your web application.<br /><br />
                        In handling sensitive data, whether it’s user credentials, personal information, or payment details, it’s crucial to <span style="color: yellow; font-weight: 700;">store data in a secured, encrypted format.</span> Encrypting data during transmission 
                        (such as through HTTPS) is important, but encryption should also extend to data stored in your database. Storing sensitive data in plain text or in local storage exposes it to unnecessary risk, making encryption an essential safeguard.<br /><br />
                        When working with third-party libraries, security remains a top priority. It might be tempting to use the latest version of a library without reviewing it, but this could introduce new vulnerabilities into your codebase. 
                        The best practice is to <span style="color: yellow; font-weight: 700;">regularly update and review libraries for vulnerabilities</span>.<br /><br />
                         Security issues can arise even in popular libraries, so careful vetting and ongoing updates are essential to maintaining a secure code environment.<br /><br />
                        By staying vigilant with these practices—reporting suspicious emails, validating inputs, preventing XSS, securing sensitive data, and reviewing third-party libraries—you can significantly reduce security risks in your software development process.
                        `,
  security_engineer: `
                        Cybersecurity incidents often strike without warning. Imagine it’s a regular workday, and suddenly, an alert comes through: 
                        your network has been breached. Panic could easily set in, but your team knows the protocol. 
                        Instead of rushing to shut down everything in a panic, they calmly take the first critical step: 
                        <span style="color: yellow; font-weight: 700;">identify the affected systems and isolate them</span>. 
                        By doing this, they prevent the attack from spreading further while preserving crucial evidence for investigation. 
                        Acting too quickly—like shutting down all systems or calling law enforcement right away—could erase this evidence or disrupt business operations. 
                        Once the affected systems are isolated, the team can assess the situation, contain the breach, and begin recovery.<br /><br />
                        As the investigation unfolds, you realize that the initial breach occurred through weak password security. 
                        Now, picture Jane, one of the managers, who believed her strong password was enough to keep her safe—until her account was hacked. 
                        This is where <span style="color: yellow; font-weight: 700;">multi-factor authentication (MFA)</span> could have made all the difference. 
                        With MFA, even if her password had been stolen, the attacker would still need a second form of verification, 
                        like a code sent to her phone or a fingerprint scan. It’s an extra layer of defense that makes unauthorized access nearly impossible. 
                        Jane learns that strong passwords alone aren’t enough anymore in today’s cyber landscape.<br /><br />
                        Meanwhile, behind the scenes, your network's first line of defense—<span style="color: yellow; font-weight: 700;">the firewall</span>—is doing its job, much like a vigilant security guard. 
                        The firewall is constantly monitoring incoming and outgoing traffic, deciding what can come in and what must be blocked. 
                        Just as a guard wouldn't allow a suspicious person into a building, the firewall blocks unauthorized access attempts, 
                        keeping malicious actors out of your systems. Without this essential gatekeeper, attackers could sneak in undetected, causing even more damage.<br /><br />
                        As the IT team investigates further, they breathe a sigh of relief because all the sensitive data on the compromised systems was <span style="color: yellow; font-weight: 700;">encrypted</span >. 
                        Encryption acts like a vault—turning readable information into indecipherable code that only authorized users can unlock with 
                        the right key. Even if attackers get into the system, they can’t make sense of the encrypted data. This protection ensures that even in the worst-case scenario, 
                        your company’s critical information remains secure and unusable to anyone who gains unauthorized access.<br /><br />
                        However, as the investigation progresses, one glaring oversight comes to light: some software on the breached systems 
                        hadn’t been updated in months. <span style="color: yellow; font-weight: 700;">Unpatched software</span> is like leaving a door wide open for attackers. Hackers look for systems 
                        running outdated software because they know these systems have known vulnerabilities that are easy to exploit. 
                        Keeping software updated is crucial to closing these gaps and protecting your network. The breach could have been avoided if those patches had been applied in time.<br /><br />
                        By connecting all these elements—responding effectively to breaches, using multi-factor authentication, employing firewalls, encrypting data, and regularly updating software—you 
                        see how each layer works together to create a robust defense against cyber threats. 
                        One weak link can open the door to disaster, but together, these security measures form an impenetrable shield that keeps your systems and data safe. 
                        `,
  product_manager: `
                        Imagine you're responsible for gathering customer data for a new product. 
                        The most important security consideration is to <span style="color: yellow; font-weight: 700;">minimize data collection and ensure compliance with regulations</span>. 
                        Collecting only what is necessary reduces the risk of exposure in case of a breach. Additionally, 
                        ensuring compliance with data protection laws like the GDPR keeps your business in line with legal requirements and 
                        protects customer privacy. 
                        Storing data in plain text or sharing it without consent could lead to severe consequences, 
                        including fines or loss of customer trust<br /><br />.
                        Now, let’s say a <span style="color: yellow; font-weight: 700;">security vulnerability</span> has been reported in your product. 
                        As a Product Manager, your immediate reaction should be to <span style="color: yellow; font-weight: 700;">communicate it to 
                        the development and security teams</span>. Ignoring the issue or delaying action until a future release could 
                        leave your product exposed, 
                        allowing attackers to exploit the vulnerability. Addressing vulnerabilities promptly ensures the security 
                        of your product and builds confidence with your users.<br /><br />
                        Speaking of regulations, you may have heard of <span style="color: yellow; font-weight: 700;">GDPR</span>. This is a law 
                        in the European Union that focuses on protecting customer data and privacy. 
                        It’s designed to give users more control over their personal data and holds companies accountable 
                        for how that data is handled. Non-compliance can result in hefty fines, 
                        making GDPR one of the most significant regulations in today’s data-driven world.<br /><br />
                        One way to protect customer accounts and sensitive information is through <span style="color: yellow; font-weight: 700;">multi-factor authentication (MFA)</span>. 
                        While it may seem like just another security feature, MFA plays a crucial role in ensuring that only authorized users can access the system. 
                        It requires users to provide two or more verification methods, making it much harder for attackers to gain unauthorized access, even if passwords are compromised.<br /><br />
                        Finally, if your product relies on a third-party service that is found to have a security vulnerability, 
                        the right course of action is to work with the vendor to fix the vulnerability immediately. Ignoring the issue 
                        or removing the service without notifying users could lead to significant risks. 
                        By collaborating with the vendor and keeping your users informed, you maintain security and transparency, ensuring that your product remains trustworthy.<br /><br />
                        By following these security best practices—limiting data collection, addressing vulnerabilities promptly, complying with regulations like GDPR, 
                        implementing MFA, and managing third-party risks—you can ensure the safety and reliability of your product. 
                        `,
  data_scientist: `
                        Imagine you’re working on a machine learning model that handles sensitive data, such as personal identifiers 
                        or financial details. 
                        The first and most important step in protecting that data is <span style="color: yellow; font-weight: 700;">anonymizing or pseudonymizing it</span>.
                         This ensures that personal details cannot be traced back to individuals, reducing the risk of a privacy breach. 
                        Storing sensitive data in plaintext within the model or sharing it freely with all team members would violate data privacy regulations and increase the potential for leaks.<br /><br />
                        When training your models, you might turn to <span style="color: yellow; font-weight: 700;">open-source data</span>. However, 
                        one major risk is that this data could <span style="color: yellow; font-weight: 700;">contain sensitive or personal information</span>. Without proper vetting, 
                        using such data could inadvertently expose personal details or create legal issues. Ensuring the data has been anonymized or vetted is critical before integrating it into your model. 
                        Open-source data doesn’t automatically guarantee security or compliance with data privacy laws.
                        As you collaborate with others and share datasets, it’s essential to have <span style="color: yellow; font-weight: 700;">proper access controls</span> in place. 
                        Sharing data without these safeguards poses a significant risk. 
                        You should always <span style="color: yellow; font-weight: 700;">encrypt the data</span> before transferring it, 
                        use anonymization techniques, and ensure that the transfer happens through <span style="color: yellow; font-weight: 700;">secure data transfer methods</span>. 
                        Failure to do so might expose sensitive information to unauthorized parties.<br /><br />
                        When dealing with <span style="color: yellow; font-weight: 700;">big data</span>, one of the biggest risks is a <span style="color: yellow; font-weight: 700;">data breach due to improper access controls</span>. 
                        With large datasets, it’s easy to overlook security measures, 
                        but without tight control over who can access the data and how it’s handled, there’s 
                        an increased risk of unauthorized access or breaches. 
                        Big data also introduces challenges in managing storage and computational power, 
                        but these are secondary to the primary concern of ensuring proper security measures.
                        Finally, <span style="color: yellow; font-weight: 700;">data anonymization</span> plays a vital role in data science, 
                        not to improve model accuracy, but to <span style="color: yellow; font-weight: 700;">comply with privacy laws like GDPR</span>. 
                        Regulations require that personal data is protected, and anonymization is a way to ensure that even if the data is exposed, individuals cannot be identified. 
                        This is key to maintaining privacy and avoiding legal repercussions while working with sensitive datasets.<br /><br />
                        By following these practices—anonymizing data, securing open-source datasets, using proper access controls, and managing big data responsibly—you 
                        can ensure your machine learning models and data science projects are both secure and compliant with regulations.  
                        `,
  devops_engineer: `
                        In a bustling tech company, the development team is deep into their workflow, utilizing a <span style="color: yellow; font-weight: 700;">Continuous Integration/Continuous Deployment (CI/CD) pipeline</span> 
                        to streamline software delivery. However, amidst the automation and efficiency, the team faces a primary security risk: <span style="color: yellow; font-weight: 700;">hardcoding credentials in configuration files.</span> 
                        This common mistake can expose sensitive information and create a pathway for attackers to gain access to critical systems. While automating deployment tasks 
                        and using version control can enhance efficiency, they do not inherently mitigate security risks like hardcoding credentials.<br /><br />
                        To effectively manage access to their <span style="color: yellow; font-weight: 700;">cloud infrastructure,</span> the team adopts the principle of <span style="color: yellow; font-weight: 700;">least privilege</span>. 
                        This means granting team members only the access necessary for their specific roles, which significantly reduces the attack surface. 
                        Conversely, giving full access to everyone on the team or sharing passwords via email compromises security. 
                        Using the same credentials across different environments can also lead to vulnerabilities if one environment is breached.
                        As the developers work on their projects, they realize the importance of securely storing sensitive <span style="color: yellow; font-weight: 700;">environment variables</span>. 
                        The best practice is to use a <span style="color: yellow; font-weight: 700;">secrets management</span> tool designed for this purpose. This ensures that sensitive information 
                        is kept out of the codebase and not hardcoded into deployment scripts. Sharing these variables with the entire team can lead to accidental exposure, 
                        undermining security efforts.<br /><br />
                        With the shift toward <span style="color: yellow; font-weight: 700;">Infrastructure as Code (IaC)</span>, the team recognizes that its main purpose is to automate infrastructure 
                        provisioning while applying consistent security policies. This approach not only enhances efficiency but also ensures that security 
                        measures are integrated into the deployment process. Allowing manual changes or avoiding security policies entirely would create inconsistencies and potential vulnerabilities.
                        In their quest for secure development practices, the team must also address vulnerabilities in <span style="color: yellow; font-weight: 700;">containerized applications</span>. 
                        A common risk is using <span style="color: yellow; font-weight: 700;">untrusted base images with vulnerabilities</span>. Such images can introduce security flaws into their applications, making 
                        it crucial for the team to vet their base images before deployment. Securing images through encryption and isolating containers with namespaces 
                        are good practices, but they won't mitigate risks from using compromised base images.
                        By adhering to these security best practices—avoiding hardcoded credentials, managing access based on least privilege, using secrets management tools,
                         embracing Infrastructure as Code, and vetting container images—the team can navigate the complexities of modern development while keeping their applications secure.
                        `
};
