interface SecurityQuestion {
  question: string;
  domain: string;
  requirement: string;
  issueIfNotCompliant: string;
  remediation: string;
}

export const answersA: SecurityQuestion[] = [
  {
    question:
      "Have you identified all third-party service providers that handle your cardholder data?",
    domain: "Third-Party Management",
    requirement: "12.8",
    issueIfNotCompliant:
      "Potential oversight of third-party handlers can lead to security risks.",
    remediation:
      "Establish a comprehensive process to identify and keep a record of all third-party service providers handling cardholder data.",
  },
  {
    question: "Do you maintain a list of all third-party service providers?",
    domain: "Third-Party Management",
    requirement: "12.8",
    issueIfNotCompliant:
      "Lack of an updated list may lead to inadequate oversight.",
    remediation:
      "Develop a system for maintaining and regularly updating a list of all third-party service providers, including their contact information and services provided.",
  },
  {
    question:
      "Have you verified that all third-party service providers are PCI DSS compliant?",
    domain: "Third-Party Management",
    requirement: "12.8.4",
    issueIfNotCompliant:
      "Working with non-compliant providers could compromise data security.",
    remediation:
      "Implement a verification process for ensuring all third-party service providers are compliant with PCI DSS, including regular checks of their compliance status.",
  },
  {
    question:
      "Do you have written agreements with all your third-party service providers?",
    domain: "Contractual Compliance",
    requirement: "12.9",
    issueIfNotCompliant:
      "Absence of formal agreements can lead to unclarified security responsibilities.",
    remediation:
      "Create and maintain written agreements with all third-party service providers, ensuring these agreements include explicit clauses regarding PCI DSS compliance.",
  },
  {
    question: "Do these agreements include clauses about PCI DSS compliance?",
    domain: "Contractual Compliance",
    requirement: "12.9",
    issueIfNotCompliant:
      "Lack of specific compliance clauses may lead to inadequate data protection measures by third parties.",
    remediation:
      "Review and update all agreements to include detailed clauses that require adherence to PCI DSS standards, ensuring third-party providers are contractually obligated to maintain compliance.",
  },
  {
    question:
      "How do you monitor your third-party service providers’ compliance status?",
    domain: "Third-Party Management",
    requirement: "12.8.5",
    issueIfNotCompliant:
      "Without monitoring, there's a risk of third-party non-compliance going unnoticed.",
    remediation:
      "Establish continuous monitoring mechanisms for assessing the compliance status of third-party service providers, including regular reviews and audits.",
  },
  {
    question:
      "Do you perform due diligence before engaging any third-party service provider?",
    domain: "Third-Party Management",
    requirement: "12.8.1",
    issueIfNotCompliant:
      "Engaging with unvetted providers could introduce security vulnerabilities.",
    remediation:
      "Create a thorough due diligence process to assess potential third-party service providers' security measures and PCI DSS compliance before engagement.",
  },
  {
    question:
      "Are your third-party service providers aware of their responsibilities in securing cardholder data?",
    domain: "Third-Party Management",
    requirement: "12.8.2",
    issueIfNotCompliant:
      "Lack of awareness can lead to inadequate security practices by third parties.",
    remediation:
      "Provide clear guidelines and regular training to third-party service providers regarding their responsibilities in securing cardholder data and the expectations of your organization.",
  },
  {
    question:
      "Do you have a process for engaging with new third-party service providers?",
    domain: "Third-Party Management",
    requirement: "12.8.1",
    issueIfNotCompliant:
      "Onboarding providers without a standard process could lead to security gaps.",
    remediation:
      "Develop a standardized and documented procedure for evaluating, selecting, and onboarding new third-party service providers, including security and compliance assessments.",
  },
  {
    question:
      "How often do you review and update your list of third-party service providers?",
    domain: "Third-Party Management",
    requirement: "12.8.3",
    issueIfNotCompliant:
      "Infrequent reviews may lead to outdated information and oversight risks.",
    remediation:
      "Establish a regular schedule for reviewing and updating the list of third-party service providers to ensure it remains current and accurate, reflecting any changes in service provision or compliance status.",
  },
  {
    question:
      "Have you identified all cardholder data flows across your third-party service providers?",
    domain: "Information Flow Management",
    requirement: "1.1.3, 3.2",
    issueIfNotCompliant:
      "Unidentified data flows can lead to unaddressed security vulnerabilities.",
    remediation:
      "Conduct a thorough analysis to map out and document all cardholder data flows across third-party service providers, ensuring complete visibility of data movements.",
  },
  {
    question: "Do you have a documented incident response plan?",
    domain: "Incident Response",
    requirement: "12.10",
    issueIfNotCompliant:
      "Lack of a formalized response plan can result in uncoordinated handling of incidents.",
    remediation:
      "Develop, document, and implement an incident response plan that clearly outlines procedures and roles in case of a data breach or security incident.",
  },
  {
    question:
      "Does your incident response plan include roles and responsibilities in the event of a breach?",
    domain: "Incident Response",
    requirement: "12.10.1",
    issueIfNotCompliant:
      "Unclear roles can cause delays and inefficiencies during an incident response.",
    remediation:
      "Ensure the incident response plan details specific roles and responsibilities for all personnel involved in responding to breaches.",
  },
  {
    question: "Are your employees trained on the incident response plan?",
    domain: "Incident Response",
    requirement: "12.10.2",
    issueIfNotCompliant:
      "Employees unaware of the plan may not effectively respond to incidents.",
    remediation:
      "Provide regular training to all relevant employees on the incident response plan, including simulations and drills.",
  },
  {
    question: "How often is the incident response plan tested?",
    domain: "Incident Response",
    requirement: "12.10.3",
    issueIfNotCompliant:
      "An untested plan might not be effective in a real incident.",
    remediation:
      "Periodically test and review the incident response plan to ensure its effectiveness and make necessary updates.",
  },
  {
    question:
      "Do you have policies for maintaining secure systems and applications?",
    domain: "System Security",
    requirement: "6.1, 6.2",
    issueIfNotCompliant:
      "Insecure systems and applications can lead to potential breaches.",
    remediation:
      "Develop and maintain policies and practices for ensuring the security of all systems and applications, including regular updates and patching.",
  },
  {
    question:
      "Are your security policies and procedures documented and accessible to relevant personnel?",
    domain: "Policy Management",
    requirement: "12.1",
    issueIfNotCompliant:
      "Policies unknown or inaccessible to staff can lead to non-compliance.",
    remediation:
      "Document all security policies and procedures and make them readily available to all relevant personnel, ensuring understanding and accessibility.",
  },
  {
    question:
      "How often are your security policies and procedures reviewed and updated?",
    domain: "Policy Management",
    requirement: "12.1.1",
    issueIfNotCompliant:
      "Outdated policies may not address current threats and vulnerabilities.",
    remediation:
      "Regularly review and update security policies and procedures to address new threats, technological changes, and business processes.",
  },
  {
    question:
      "Do you have a process for identifying and assessing new security vulnerabilities?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Failing to identify new vulnerabilities can leave systems exposed to attacks.",
    remediation:
      "Implement a continuous process for identifying, assessing, and mitigating new security vulnerabilities across all systems and applications.",
  },
  {
    question:
      "Are you aware of the latest security alerts and vulnerabilities that may impact your systems?",
    domain: "Vulnerability Management",
    requirement: "6.2",
    issueIfNotCompliant:
      "Lack of awareness of new threats can result in unpreparedness and potential breaches.",
    remediation:
      "Establish a mechanism to stay informed about the latest security alerts and vulnerabilities, integrating this information into your risk management process.",
  },
  {
    question:
      "How do you ensure your third-party service providers apply security patches in a timely manner?",
    domain: "Third-Party Management",
    requirement: "12.8.4",
    issueIfNotCompliant:
      "Untimely patching by third parties can expose your data to known vulnerabilities.",
    remediation:
      "Monitor and require third-party service providers to apply relevant security patches within a defined timeframe, as part of their contractual obligations.",
  },
  {
    question: "Do you have a policy for information security?",
    domain: "Information Security Policy",
    requirement: "12",
    issueIfNotCompliant:
      "Absence of a formal policy can lead to inconsistent security practices.",
    remediation:
      "Develop a comprehensive information security policy that outlines security expectations, procedures, and responsibilities across the organization.",
  },
  {
    question:
      "Are employees trained on the importance of cardholder data security?",
    domain: "Security Awareness and Training",
    requirement: "12.6",
    issueIfNotCompliant:
      "Employees unaware of data security importance can inadvertently cause data breaches.",
    remediation:
      "Implement an ongoing training program that educates employees about the importance of cardholder data security and best practices for protecting sensitive information.",
  },
  {
    question:
      "Is there a disciplinary process for employees who violate security policies?",
    domain: "Policy Enforcement",
    requirement: "12.6.1",
    issueIfNotCompliant:
      "Without a disciplinary process, policy violations may go unchecked.",
    remediation:
      "Establish a clear disciplinary process for employees who violate security policies to ensure adherence and address non-compliance effectively.",
  },
  {
    question:
      "How do you ensure that your employees are aware of their roles and responsibilities in securing cardholder data?",
    domain: "Employee Training",
    requirement: "12.6",
    issueIfNotCompliant:
      "Employees unclear on their roles can lead to security lapses.",
    remediation:
      "Conduct targeted training sessions that clearly define and communicate the roles and responsibilities of each employee in securing cardholder data, ensuring regular updates and refreshers.",
  },
  {
    question:
      "Do you have a process to monitor and control all access to your network and cardholder data?",
    domain: "Access Control & Monitoring",
    requirement: "7, 10",
    issueIfNotCompliant:
      "Inadequate monitoring leading to potential unauthorized access.",
    remediation:
      "Implement comprehensive access control measures and monitoring mechanisms to manage access to your network and cardholder data.",
  },
  {
    question: "Are user access rights reviewed at regular intervals?",
    domain: "Access Control",
    requirement: "7.1.2",
    issueIfNotCompliant: "Risks of outdated access privileges.",
    remediation:
      "Regularly review and update user access rights to ensure they are in line with current job requirements and responsibilities.",
  },
  {
    question:
      "Do you have a procedure for granting and revoking access to cardholder data?",
    domain: "Access Control",
    requirement: "7.1.1, 7.2.2",
    issueIfNotCompliant: "Unauthorized access to sensitive data.",
    remediation:
      "Establish formal procedures for granting and revoking access to cardholder data, ensuring access is managed effectively and securely.",
  },
  {
    question: "How do you manage user identifications and passwords?",
    domain: "Identity Management",
    requirement: "8.1, 8.2",
    issueIfNotCompliant: "Risks of compromised user credentials.",
    remediation:
      "Implement strong identity and password management policies, including secure password creation, storage, and regular updates.",
  },
  {
    question: "Are passwords required to be complex and changed regularly?",
    domain: "Password Security",
    requirement: "8.2.3, 8.2.4",
    issueIfNotCompliant: "Vulnerability to password attacks.",
    remediation:
      "Enforce complex password requirements and mandate regular password changes to enhance security.",
  },
  {
    question:
      "Is multifactor authentication used for accessing cardholder data?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant: "Increased risk of data breaches.",
    remediation:
      "Implement multifactor authentication for accessing cardholder data to add an additional layer of security.",
  },
  {
    question:
      "Do you have controls to prevent unauthorized access to cardholder data?",
    domain: "Access Control",
    requirement: "7",
    issueIfNotCompliant: "Potential for data leakage or breaches.",
    remediation:
      "Develop and maintain access controls to prevent unauthorized access to cardholder data.",
  },
  {
    question:
      "Are your systems and networks regularly tested for vulnerabilities?",
    domain: "Vulnerability Testing",
    requirement: "11.2",
    issueIfNotCompliant: "Unidentified system vulnerabilities.",
    remediation:
      "Conduct regular vulnerability testing on systems and networks to identify and address potential security weaknesses.",
  },
  {
    question:
      "Do you have a process for regularly updating antivirus software?",
    domain: "Malware Protection",
    requirement: "5.2",
    issueIfNotCompliant: "Increased risk of malware infections.",
    remediation:
      "Maintain an up-to-date antivirus software program and ensure it is updated regularly to protect against malware threats.",
  },
  {
    question: "How do you protect your systems against malware?",
    domain: "Malware Protection",
    requirement: "5.1, 5.3",
    issueIfNotCompliant: "Susceptibility to malware threats.",
    remediation:
      "Implement comprehensive malware protection strategies, including antivirus software and other malware defense mechanisms.",
  },
  {
    question: "Are audit logs maintained and reviewed regularly?",
    domain: "Logging and Monitoring",
    requirement: "10.1, 10.2",
    issueIfNotCompliant:
      "Lack of tracking and detecting suspicious activities.",
    remediation:
      "Maintain and regularly review audit logs to monitor and investigate activities within your network and systems.",
  },
  {
    question:
      "Do you have a process for tracking and monitoring access to network resources and cardholder data?",
    domain: "Logging and Monitoring",
    requirement: "10.3",
    issueIfNotCompliant:
      "Inadequate oversight of data and network resource access.",
    remediation:
      "Implement a system for continuous monitoring and tracking access to network resources and cardholder data.",
  },
  {
    question:
      "How do you ensure physical security at locations where cardholder data is processed?",
    domain: "Physical Security",
    requirement: "9",
    issueIfNotCompliant: "Risk of physical breaches and data theft.",
    remediation:
      "Establish and enforce physical security measures at locations where cardholder data is processed to prevent unauthorized access and protect sensitive information.",
  },
  {
    question:
      "Are visitors identified and authenticated before accessing areas where cardholder data is processed?",
    domain: "Physical Security",
    requirement: "9.4",
    issueIfNotCompliant: "Unauthorized physical access to sensitive areas.",
    remediation:
      "Implement visitor identification and authentication procedures for areas where cardholder data is processed to ensure only authorized individuals have access.",
  },
  {
    question:
      "Do you have procedures for handling and storing media containing cardholder data?",
    domain: "Media Management",
    requirement: "9.6, 9.7",
    issueIfNotCompliant:
      "Potential misuse or theft of media with sensitive data.",
    remediation:
      "Develop secure handling and storage procedures for media containing cardholder data, including access control and proper disposal methods.",
  },
  {
    question:
      "Are policies in place for the secure disposal of cardholder data?",
    domain: "Data Disposal",
    requirement: "9.8",
    issueIfNotCompliant: "Risks of data leaks from improperly disposed data.",
    remediation:
      "Implement secure data disposal policies and procedures to ensure cardholder data is irretrievably destroyed when no longer needed.",
  },
  {
    question:
      "How do you ensure that cardholder data on electronic media is destroyed when no longer needed?",
    domain: "Data Disposal",
    requirement: "9.8.2",
    issueIfNotCompliant: "Data remnants leading to potential breaches.",
    remediation:
      "Use secure methods to destroy electronic media containing cardholder data, such as degaussing, physical destruction, or secure wiping.",
  },
  {
    question:
      "Do you have a policy for encrypting transmission of cardholder data across open networks?",
    domain: "Encryption",
    requirement: "4.1",
    issueIfNotCompliant: "Risk of data interception during transmission.",
    remediation:
      "Implement encryption policies for data transmission over open networks to protect cardholder data from interception and unauthorized access.",
  },
  {
    question:
      "How do you ensure that cardholder data is not sent via unsecured email channels?",
    domain: "Data Transmission Security",
    requirement: "4.2",
    issueIfNotCompliant:
      "Potential exposure of data through unsecured channels.",
    remediation:
      "Prohibit the transmission of cardholder data via unsecured email and implement secure methods for data transmission, such as encrypted emails or secure file transfer protocols.",
  },
  {
    question:
      "Do you have controls to ensure that cardholder data is not stored unnecessarily?",
    domain: "Data Storage",
    requirement: "3.1",
    issueIfNotCompliant: "Unnecessary data storage leading to increased risk.",
    remediation:
      "Implement data minimization controls and procedures to ensure cardholder data is not stored unless absolutely necessary and is securely deleted when no longer needed.",
  },
  {
    question: "Is there a policy for data retention and disposal?",
    domain: "Data Retention and Disposal",
    requirement: "3.1",
    issueIfNotCompliant:
      "Risks associated with prolonged or improper data storage.",
    remediation:
      "Develop and enforce data retention and disposal policies to determine how long cardholder data should be kept and the methods for its secure disposal.",
  },
  {
    question:
      "How do you ensure that cardholder data is only stored for legitimate business needs?",
    domain: "Data Storage",
    requirement: "3.1",
    issueIfNotCompliant: "Storing data without clear business necessity.",
    remediation:
      "Define and adhere to legitimate business requirements for data storage and regularly review stored data to ensure it aligns with these needs.",
  },
  {
    question: "Are regular backups of cardholder data performed and tested?",
    domain: "Backup Management",
    requirement: "9.5.1",
    issueIfNotCompliant: "Data loss risks due to inadequate backup processes.",
    remediation:
      "Implement and regularly test backup procedures for cardholder data to ensure data can be recovered in the event of a loss or system failure.",
  },
  {
    question:
      "Are backups stored securely and in a manner that protects them from unauthorized access?",
    domain: "Backup Security",
    requirement: "9.5",
    issueIfNotCompliant: "Risks of unauthorized access to backup data.",
    remediation:
      "Securely store backups in a location that is protected from unauthorized access and ensure they are encrypted if stored off-site.",
  },
  {
    question:
      "Do you have controls in place to ensure the confidentiality of cardholder data during transmission?",
    domain: "Transmission Security",
    requirement: "4.1",
    issueIfNotCompliant: "Risk of data exposure during transmission.",
    remediation:
      "Implement strong controls to maintain the confidentiality of cardholder data during transmission, such as using secure transmission protocols like SSL/TLS.",
  },
  {
    question:
      "How do you monitor and control all access to your systems and cardholder data?",
    domain: "Access Control & Monitoring",
    requirement: "7, 10",
    issueIfNotCompliant: "Potential unauthorized access and security breaches.",
    remediation:
      "Implement robust systems to monitor and control access to networks and cardholder data, ensuring only authorized personnel have access.",
  },
  {
    question:
      "Are all access control systems up to date and functioning properly?",
    domain: "Access Control Maintenance",
    requirement: "7.1, 7.2",
    issueIfNotCompliant:
      "Risks due to outdated or malfunctioning access controls.",
    remediation:
      "Regularly update and test access control systems to ensure they are functioning correctly and providing adequate security.",
  },
  {
    question:
      "Do you have a policy that addresses information security for all personnel?",
    domain: "Information Security Policy",
    requirement: "12",
    issueIfNotCompliant: "Lack of a unified approach to information security.",
    remediation:
      "Develop and implement a comprehensive information security policy that is communicated to and understood by all personnel.",
  },
  {
    question:
      "How often do you conduct security awareness training for your employees?",
    domain: "Security Awareness Training",
    requirement: "12.6",
    issueIfNotCompliant:
      "Employees may lack awareness of security best practices.",
    remediation:
      "Conduct regular security awareness training sessions for employees to educate them about security risks and preventive measures.",
  },
  {
    question:
      "Are employees aware of the procedures for reporting security incidents?",
    domain: "Incident Reporting",
    requirement: "12.10.2",
    issueIfNotCompliant:
      "Ineffective incident response due to lack of employee awareness.",
    remediation:
      "Ensure all employees are trained and aware of the procedures for reporting security incidents, emphasizing the importance of prompt reporting.",
  },
  {
    question: "Do you have a formal risk assessment process in place?",
    domain: "Risk Assessment",
    requirement: "12.2",
    issueIfNotCompliant: "Unidentified or unaddressed security risks.",
    remediation:
      "Establish and maintain a formal risk assessment process to regularly identify and evaluate security risks.",
  },
  {
    question: "How often is the risk assessment process conducted?",
    domain: "Risk Assessment Frequency",
    requirement: "12.2.1",
    issueIfNotCompliant:
      "Outdated risk assessments may not reflect current threats.",
    remediation:
      "Conduct regular risk assessments to ensure ongoing awareness and mitigation of emerging security risks.",
  },
  {
    question:
      "Do you consider threats and vulnerabilities from both internal and external sources in your risk assessment?",
    domain: "Comprehensive Risk Assessment",
    requirement: "12.2",
    issueIfNotCompliant:
      "Incomplete risk assessment can lead to overlooked vulnerabilities.",
    remediation:
      "Include both internal and external sources of threats and vulnerabilities in the risk assessment process for a holistic security overview.",
  },
  {
    question: "Is there a management process to address identified risks?",
    domain: "Risk Management",
    requirement: "12.2.2",
    issueIfNotCompliant:
      "Unaddressed risks can lead to potential security incidents.",
    remediation:
      "Implement a structured process for managing and addressing identified risks, including mitigation strategies and periodic reviews.",
  },
  {
    question: "Do you regularly test security systems and processes?",
    domain: "System Testing",
    requirement: "11.2",
    issueIfNotCompliant: "Unidentified vulnerabilities in security systems.",
    remediation:
      "Regularly test security systems and processes to identify and address any vulnerabilities or flaws.",
  },
  {
    question:
      "How do you ensure that security policies and operational procedures are followed?",
    domain: "Policy Enforcement",
    requirement: "12",
    issueIfNotCompliant: "Non-compliance with established security policies.",
    remediation:
      "Implement checks and audits to ensure adherence to security policies and operational procedures, including corrective actions for non-compliance.",
  },
  {
    question:
      "Are there procedures to respond to any alerts generated by security monitoring systems?",
    domain: "Alert Response",
    requirement: "10.6",
    issueIfNotCompliant: "Inadequate response to security alerts.",
    remediation:
      "Develop procedures to effectively respond to security alerts generated by monitoring systems, ensuring timely and appropriate actions.",
  },
  {
    question:
      "How do you ensure the integrity and confidentiality of cardholder data?",
    domain: "Data Integrity & Confidentiality",
    requirement: "3, 4",
    issueIfNotCompliant:
      "Potential data breaches or unauthorized modifications.",
    remediation:
      "Implement strong controls to maintain data integrity and confidentiality, including encryption and access restrictions.",
  },
  {
    question:
      "Do you have controls in place to identify and authenticate access to systems components?",
    domain: "Access Identification & Authentication",
    requirement: "8.1",
    issueIfNotCompliant: "Unauthorized access to systems components.",
    remediation:
      "Implement robust identification and authentication mechanisms to control access to system components, ensuring secure and verified access.",
  },
  {
    question:
      "Are password policies enforced, including password complexity and expiration?",
    domain: "Password Management",
    requirement: "8.2",
    issueIfNotCompliant: "Weak passwords leading to security breaches.",
    remediation:
      "Enforce strict password policies, including complexity requirements and regular expiration, to strengthen authentication security.",
  },
  {
    question: "Do you have measures to protect against brute force attacks?",
    domain: "Brute Force Protection",
    requirement: "8.3",
    issueIfNotCompliant: "Vulnerability to brute force attacks.",
    remediation:
      "Implement security measures, such as account lockout and monitoring, to detect and prevent brute force attacks against user accounts.",
  },
  {
    question:
      "Are systems and applications developed in accordance with PCI DSS and secure coding guidelines?",
    domain: "Secure Development",
    requirement: "6.5",
    issueIfNotCompliant: "Security vulnerabilities in software.",
    remediation:
      "Ensure development processes align with PCI DSS guidelines and secure coding standards to minimize software vulnerabilities.",
  },
  {
    question:
      "Is there a process to review custom software code for security vulnerabilities?",
    domain: "Code Review",
    requirement: "6.3.7",
    issueIfNotCompliant:
      "Risks of introducing vulnerabilities through custom code.",
    remediation:
      "Conduct regular security reviews of custom software code to identify and rectify any potential vulnerabilities.",
  },
  {
    question:
      "Do you have a process for approving and testing all network connections and changes to firewall and router configurations?",
    domain: "Network Security",
    requirement: "1.1.7",
    issueIfNotCompliant: "Unsecured network connections leading to breaches.",
    remediation:
      "Implement a process for approving and testing network connections and changes to firewall and router configurations to ensure network security.",
  },
  {
    question:
      "Are firewalls and routers configured to restrict connections between untrusted networks and systems in the cardholder data environment?",
    domain: "Network Protection",
    requirement: "1.4",
    issueIfNotCompliant:
      "Potential unauthorized access through untrusted networks.",
    remediation:
      "Ensure firewalls and routers are configured to restrict untrusted network connections and protect the cardholder data environment.",
  },
  {
    question:
      "Do you review firewall and router configurations at least every six months?",
    domain: "Configuration Review",
    requirement: "1.1.6",
    issueIfNotCompliant: "Outdated configurations leading to vulnerabilities.",
    remediation:
      "Regularly review and update firewall and router configurations to maintain effective network security.",
  },
  {
    question: "How do you protect cardholder data on public networks?",
    domain: "Public Network Security",
    requirement: "4.1",
    issueIfNotCompliant: "Data exposure on public networks.",
    remediation:
      "Implement encryption and other security measures for data transmitted over public networks to protect cardholder data from unauthorized access.",
  },
  {
    question:
      "Are wireless access points managed properly to protect the cardholder data environment?",
    domain: "Wireless Security",
    requirement: "1.2.3",
    issueIfNotCompliant: "Risks associated with unsecured wireless networks.",
    remediation:
      "Manage and secure wireless access points within the cardholder data environment to prevent unauthorized access and data breaches.",
  },
  {
    question:
      "Do you use intrusion detection/prevention systems to monitor all traffic in the cardholder data environment?",
    domain: "Intrusion Detection",
    requirement: "11.4",
    issueIfNotCompliant: "Potential for undetected security breaches.",
    remediation:
      "Utilize intrusion detection/prevention systems to monitor traffic and detect suspicious activities within the cardholder data environment.",
  },
  {
    question:
      "How do you ensure that security policies and operational procedures for managing firewalls and routers are documented, in use, and known to all affected parties?",
    domain: "Policy Documentation & Awareness",
    requirement: "1.1.6, 12.1",
    issueIfNotCompliant: "Lack of awareness or adherence to security policies.",
    remediation:
      "Document security policies and ensure they are communicated to and understood by all parties involved in managing firewalls and routers.",
  },
  {
    question:
      "Are all users with access to cardholder data identified and authenticated?",
    domain: "Access Control",
    requirement: "8.1",
    issueIfNotCompliant:
      "Unauthorized access due to inadequate user authentication.",
    remediation:
      "Implement stringent user identification and authentication processes for anyone accessing cardholder data, ensuring secure and verified access.",
  },
  {
    question:
      "Do you have a process for assigning a unique ID to each person with computer access?",
    domain: "Unique IDs",
    requirement: "8.1.1",
    issueIfNotCompliant:
      "Difficulty in tracing user activities without unique IDs.",
    remediation:
      "Ensure each individual with computer access is assigned a unique ID to maintain accountability and traceability of actions.",
  },
  {
    question:
      "Are all users aware of the procedures for protecting their credentials?",
    domain: "Credential Management",
    requirement: "8.2",
    issueIfNotCompliant: "Increased risk of compromised credentials.",
    remediation:
      "Educate users on the importance of protecting their credentials and establish procedures for secure management of user credentials.",
  },
  {
    question:
      "How do you manage remote access to the cardholder data environment?",
    domain: "Remote Access",
    requirement: "8.3",
    issueIfNotCompliant:
      "Security vulnerabilities associated with remote access.",
    remediation:
      "Securely manage remote access to the cardholder data environment, including the use of secure VPNs and multifactor authentication.",
  },
  {
    question:
      "Is remote access to the cardholder data environment securely managed and monitored?",
    domain: "Remote Access Security",
    requirement: "8.3, 12.3.9",
    issueIfNotCompliant:
      "Potential data breaches from unsecured remote access.",
    remediation:
      "Ensure remote access is securely managed and monitored, including regular audits and the use of secure connection protocols.",
  },
  {
    question:
      "Do you have controls to ensure that personnel are only given access to the cardholder data they need to perform their jobs?",
    domain: "Access Limitation",
    requirement: "7.1.2",
    issueIfNotCompliant: "Excessive access rights leading to data risks.",
    remediation:
      "Implement access control measures that limit personnel access to cardholder data strictly based on job requirements.",
  },
  {
    question:
      "Are there processes in place to ensure that access rights are removed upon termination of employment?",
    domain: "Access Revocation",
    requirement: "8.1.4",
    issueIfNotCompliant:
      "Continued access by former employees posing security risks.",
    remediation:
      "Establish a process to promptly revoke all access rights for employees upon termination of their employment.",
  },
  {
    question:
      "How do you ensure that cardholder data is only shared with authorized parties?",
    domain: "Data Sharing",
    requirement: "3.4",
    issueIfNotCompliant: "Unauthorized sharing can lead to data breaches.",
    remediation:
      "Implement controls and procedures to ensure that cardholder data is shared only with authorized parties, maintaining strict data confidentiality.",
  },
  {
    question:
      "Do you have a process for periodically testing security systems and processes?",
    domain: "System Testing",
    requirement: "11.2",
    issueIfNotCompliant: "Unidentified vulnerabilities due to lack of testing.",
    remediation:
      "Regularly test and evaluate the effectiveness of security systems and processes to identify and rectify potential vulnerabilities.",
  },
  {
    question:
      "How do you ensure the proper functionality of security systems and processes?",
    domain: "System Maintenance",
    requirement: "6.2, 11.2",
    issueIfNotCompliant:
      "Ineffective security systems due to improper maintenance.",
    remediation:
      "Conduct ongoing maintenance and regular monitoring of security systems to ensure they function correctly and provide adequate protection.",
  },
  {
    question:
      "Do you have a process for detecting and responding to security incidents?",
    domain: "Incident Response",
    requirement: "12.10",
    issueIfNotCompliant: "Inadequate response to security incidents.",
    remediation:
      "Develop and implement a process for the timely detection of and response to security incidents, including clear procedures and roles.",
  },
  {
    question:
      "Are there procedures for responding to a system breach or intrusion?",
    domain: "Breach Response",
    requirement: "12.10.1",
    issueIfNotCompliant: "Ineffective management of system breaches.",
    remediation:
      "Establish specific procedures for responding to system breaches or intrusions, including immediate actions and investigation processes.",
  },
  {
    question:
      "How do you manage and secure all system components in your cardholder data environment?",
    domain: "System Security",
    requirement: "2.2, 6.1",
    issueIfNotCompliant:
      "Vulnerabilities in system components leading to breaches.",
    remediation:
      "Implement comprehensive security measures for all system components within the cardholder data environment, including regular updates and security checks.",
  },
  {
    question:
      "Are all system components and software protected from known vulnerabilities?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant: "Exposure to known vulnerabilities.",
    remediation:
      "Regularly update system components and software to protect against known vulnerabilities, including the timely installation of security patches.",
  },
  {
    question:
      "Do you have a process for identifying new vulnerabilities and assigning a risk ranking?",
    domain: "Vulnerability Identification",
    requirement: "6.2",
    issueIfNotCompliant:
      "Unaddressed new vulnerabilities can leave systems exposed.",
    remediation:
      "Implement a continuous process for identifying new vulnerabilities, assessing their risk, and prioritizing remediation efforts based on risk ranking.",
  },
  {
    question:
      "How do you ensure that all security patches are installed within the required timeframe?",
    domain: "Patch Management",
    requirement: "6.2",
    issueIfNotCompliant: "Security risks due to outdated patches.",
    remediation:
      "Establish a policy and process to ensure timely installation of security patches, reducing the window of vulnerability.",
  },
  {
    question:
      "Are there controls to protect cardholder data during electronic transmission over networks?",
    domain: "Data Transmission Security",
    requirement: "4.1",
    issueIfNotCompliant: "Risk of data exposure during transmission.",
    remediation:
      "Implement strong controls, such as encryption, to secure cardholder data during electronic transmission over networks, ensuring data confidentiality.",
  },
  {
    question:
      "How do you ensure that encryption keys used for cardholder data are managed securely?",
    domain: "Key Management",
    requirement: "3.6",
    issueIfNotCompliant:
      "Compromise of encryption keys leading to data breaches.",
    remediation:
      "Manage encryption keys securely, ensuring their confidentiality and integrity, and restricting access to authorized personnel only.",
  },
  {
    question:
      "Are encryption protocols for cardholder data transmission up to date and secure?",
    domain: "Encryption Security",
    requirement: "4.1",
    issueIfNotCompliant:
      "Vulnerabilities due to outdated or insecure encryption protocols.",
    remediation:
      "Use up-to-date and secure encryption protocols for data transmission, regularly reviewing and updating them to maintain security.",
  },
  {
    question:
      "Do you have a process for monitoring and testing encryption protocols regularly?",
    domain: "Encryption Testing",
    requirement: "4.1",
    issueIfNotCompliant: "Ineffective encryption due to lack of testing.",
    remediation:
      "Regularly monitor and test the effectiveness of encryption protocols, ensuring they provide adequate security for data transmission.",
  },
  {
    question:
      "How do you manage and secure cardholder data in shared hosting environments?",
    domain: "Shared Hosting Security",
    requirement: "2.6",
    issueIfNotCompliant: "Risks in shared hosting environments.",
    remediation:
      "Implement specific controls and security measures to protect and manage cardholder data in shared hosting environments, ensuring data isolation and security.",
  },
  {
    question:
      "Are there controls to restrict access to cardholder data in shared hosting environments?",
    domain: "Access Control in Shared Hosting",
    requirement: "7.2",
    issueIfNotCompliant: "Unauthorized access in shared environments.",
    remediation:
      "Enforce strict access controls in shared hosting environments, ensuring that access to cardholder data is restricted to authorized personnel only.",
  },
  {
    question:
      "Do you have a process for securely managing passwords and other security parameters within shared hosting environments?",
    domain: "Password Security in Shared Hosting",
    requirement: "8.2.1",
    issueIfNotCompliant:
      "Compromised security parameters in shared environments.",
    remediation:
      "Securely manage passwords and other security settings within shared hosting environments, following best practices for password security and parameter configuration.",
  },
  {
    question:
      "How do you ensure that your third-party service providers adhere to PCI DSS requirements in shared hosting environments?",
    domain: "Third-Party Compliance in Shared Hosting",
    requirement: "12.8",
    issueIfNotCompliant:
      "Non-compliance of third parties in shared environments.",
    remediation:
      "Monitor and verify third-party service providers' compliance with PCI DSS requirements in shared hosting environments, ensuring adherence to security standards.",
  },
  {
    question:
      "Are there procedures to ensure that system components in shared hosting environments are protected from known vulnerabilities?",
    domain: "Shared Hosting Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant: "Exposure to vulnerabilities in shared hosting.",
    remediation:
      "Implement procedures to regularly check and protect system components in shared hosting environments from known vulnerabilities, including timely patching and security updates.",
  },
];
