interface SecurityQuestion {
    question: string;
    domain: string;
    requirement: string;
    issueIfNotCompliant: string;
    remediation: string;
}

export const answersB: SecurityQuestion[] = [
    {
        question: "Are high-risk vulnerabilities identified?",
        domain: "Vulnerability Management",
        requirement: "6.1",
        issueIfNotCompliant: "Overlooking high-risk vulnerabilities can lead to severe security breaches.",
        remediation: "Have a clear process to identify and categorize high-risk vulnerabilities, ensuring they are addressed promptly and effectively."
    },
    {
        question: "Are critical vulnerabilities identified?",
        domain: "Vulnerability Management",
        requirement: "6.1",
        issueIfNotCompliant: "Not identifying critical vulnerabilities can result in significant security incidents.",
        remediation: "Implement mechanisms to identify critical vulnerabilities, ensuring immediate action is taken to mitigate risks."
    },
    {
        question: "Are security patches installed within one month of release?",
        domain: "Patch Management",
        requirement: "6.2",
        issueIfNotCompliant: "Delayed patch installation can leave systems vulnerable to known risks.",
        remediation: "Develop a policy to install security patches within one month of their release to ensure systems are protected against known vulnerabilities."
    },
    {
        question: "Is access assigned to users based on job classification?",
        domain: "Access Control",
        requirement: "7.1.1",
        issueIfNotCompliant: "Access not aligned with job duties can lead to unnecessary data exposure.",
        remediation: "Assign access rights based on users' job classifications, ensuring access is appropriate for their role and responsibilities."
    },
    {
        question: "Is access assigned based on the least privilege necessary?",
        domain: "Access Control",
        requirement: "7.1.2",
        issueIfNotCompliant: "Excessive privileges increase the risk of data compromise.",
        remediation: "Implement the principle of least privilege, ensuring users have only the minimum access necessary for their job functions."
    },
    {
        question: "Are security policies for Requirement 8 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation.",
        remediation: "Document all security policies related to Requirement 8, ensuring clarity and accessibility for relevant personnel."
    },
    {
        question: "Are security policies for Requirement 8 kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Outdated policies may not effectively address current threats.",
        remediation: "Regularly review and update security policies related to Requirement 8, keeping them relevant and effective."
    },
    {
        question: "Are security policies for Requirement 8 in active use?",
        domain: "Policy Implementation",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Policies not actively followed can lead to security gaps.",
        remediation: "Ensure that all security policies for Requirement 8 are actively implemented and adhered to within the organization."
    },
    {
        question: "Are security policies for Requirement 8 known to all affected parties?",
        domain: "Policy Awareness",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Lack of awareness can result in non-compliance and security breaches.",
        remediation: "Communicate all security policies related to Requirement 8 to all affected parties, ensuring widespread understanding and compliance."
    },
    {
        question: "How are group accounts managed for exceptional circumstances?",
        domain: "Account Management",
        requirement: "8",
        issueIfNotCompliant: "Mismanaged group accounts can pose security risks.",
        remediation: "Establish strict guidelines and monitoring for the use of group accounts, allowing them only in exceptional circumstances with proper controls."
    },
    {
        question: "How are shared accounts managed for exceptional circumstances?",
        domain: "Account Management",
        requirement: "8",
        issueIfNotCompliant: "Shared accounts can lead to accountability issues.",
        remediation: "Implement rigorous management and oversight for shared accounts, restricting their use to necessary situations with full auditing."
    },
    {
        question: "Are third-party remote access accounts enabled only when needed?",
        domain: "Remote Access",
        requirement: "8.1.5",
        issueIfNotCompliant: "Constantly enabled third-party access can be a security vulnerability.",
        remediation: "Ensure third-party remote access accounts are enabled only when required and disabled immediately afterward to minimize risks."
    },
    {
        question: "Are third-party remote access accounts monitored for unexpected activity?",
        domain: "Remote Access",
        requirement: "10.2.5",
        issueIfNotCompliant: "Lack of monitoring can lead to undetected unauthorized access.",
        remediation: "Continuously monitor third-party remote access accounts for any unusual or unexpected activity, responding promptly to any anomalies."
    },
    {
        question: "Is MFA implemented for all remote network access from outside the entity’s network?",
        domain: "Multi-Factor Authentication",
        requirement: "8.3",
        issueIfNotCompliant: "Single-factor authentication for remote access is vulnerable to compromise.",
        remediation: "Implement multi-factor authentication (MFA) for all remote network access originating from outside the entity's network to enhance security."
    },
    {
        question: "Are security policies for Requirement 9 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 9",
        issueIfNotCompliant: "Lack of documentation can lead to inconsistencies and gaps in physical security.",
        remediation: "Document all security policies related to Requirement 9, ensuring they are clear, comprehensive, and accessible."
    },
    {
        question: "Are security policies for Requirement 9 kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 9",
        issueIfNotCompliant: "Outdated policies may not address current physical security challenges.",
        remediation: "Regularly review and update physical security policies as per Requirement 9 to address evolving threats and changes in the environment."
    },
    {
        question: "Are security policies for Requirement 9 in active use?",
        domain: "Policy Implementation",
        requirement: "12.1, 9",
        issueIfNotCompliant: "Physical security policies not in use can result in vulnerabilities.",
        remediation: "Actively implement and enforce physical security policies in line with Requirement 9, ensuring effective protection of cardholder data."
    },
    {
        question: "Are security policies for Requirement 9 known to all affected parties?",
        domain: "Policy Awareness",
        requirement: "12.1, 9",
        issueIfNotCompliant: "Unawareness of physical security policies can lead to breaches.",
        remediation: "Communicate all physical security policies to relevant personnel, ensuring understanding and compliance."
    },
    {
        question: "Are physical controls implemented to restrict network jack use?",
        domain: "Physical Access Control",
        requirement: "9.1.2",
        issueIfNotCompliant: "Unrestricted network jacks can be exploited for unauthorized access.",
        remediation: "Implement physical controls to restrict the use of network jacks, preventing unauthorized network access."
    },
    {
        question: "Are logical controls implemented to restrict network jack use?",
        domain: "Network Access Control",
        requirement: "1.1.6",
        issueIfNotCompliant: "Lack of logical controls may lead to network breaches.",
        remediation: "Use logical controls, such as network access control lists, to manage and restrict the use of network jacks."
    },
    {
        question: "Is media with cardholder data physically secured?",
        domain: "Media Protection",
        requirement: "9.6",
        issueIfNotCompliant: "Unsecured media can be easily accessed or stolen.",
        remediation: "Secure all media containing cardholder data in locked and access-controlled storage areas to prevent unauthorized access."
    },
    {
        question: "Are offline media backups with cardholder data stored securely?",
        domain: "Media Backups",
        requirement: "9.5",
        issueIfNotCompliant: "Insecurely stored backups can be a target for theft or unauthorized access.",
        remediation: "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats."
    },
    {
        question: "Is media with cardholder data classified according to sensitivity?",
        domain: "Media Classification",
        requirement: "9.6.1",
        issueIfNotCompliant: "Without classification, media may not receive the appropriate level of protection.",
        remediation: "Classify media containing cardholder data based on sensitivity, ensuring that higher sensitivity media receives stronger protection measures."
    },
    {
        question: "How is media with cardholder data secured for external transport?",
        domain: "Media Transport",
        requirement: "9.6",
        issueIfNotCompliant: "Media transported without adequate security measures can be compromised.",
        remediation: "Implement strict security protocols for the external transport of media, including encryption and secure containers, to protect cardholder data."
    },
    {
        question: "Does management approve moving cardholder data outside the facility?",
        domain: "Data Movement",
        requirement: "9.6",
        issueIfNotCompliant: "Unapproved data movement can lead to data loss or exposure.",
        remediation: "Require management approval for any movement of cardholder data outside the facility, ensuring oversight and accountability."
    },
    {
        question: "How are hard-copy materials with cardholder data destroyed?",
        domain: "Data Destruction",
        requirement: "9.8.2",
        issueIfNotCompliant: "Improperly destroyed materials can lead to data recovery and misuse.",
        remediation: "Employ secure destruction methods for hard-copy materials containing cardholder data, such as cross-cut shredding or incineration, to ensure data is unrecoverable."
    },
    {
        question: "Are POI devices protected from tampering and substitution?",
        domain: "Physical Security",
        requirement: "9.9",
        issueIfNotCompliant: "Tampered POI devices can lead to data breaches.",
        remediation: "Implement measures to protect Point of Interaction (POI) devices from tampering and substitution, including physical security controls and regular inspections."
    },
    {
        question: "Is an up-to-date list of POI devices maintained?",
        domain: "Inventory Management",
        requirement: "9.9.1",
        issueIfNotCompliant: "Lack of inventory control can result in unmanaged devices.",
        remediation: "Maintain a current inventory of all POI devices, including their location and unique identifier, to track and manage them effectively."
    },
    {
        question: "Are POI device surfaces inspected for tampering?",
        domain: "Physical Security",
        requirement: "9.9.2",
        issueIfNotCompliant: "Undetected tampering can compromise data security.",
        remediation: "Regularly inspect the surfaces of POI devices for tampering, looking for signs like skimming devices or unusual attachments."
    },
    {
        question: "Is training provided for POI device security?",
        domain: "Training and Awareness",
        requirement: "9.9.3",
        issueIfNotCompliant: "Lack of awareness can lead to missed signs of device tampering.",
        remediation: "Provide training to staff on recognizing signs of POI device tampering and the proper actions to take if tampering is suspected."
    },
    {
        question: "Are external vulnerability scans performed every three months?",
        domain: "Vulnerability Scans",
        requirement: "11.2.2",
        issueIfNotCompliant: "Unidentified vulnerabilities can pose ongoing risks.",
        remediation: "Conduct external vulnerability scans at least quarterly to identify and address vulnerabilities outside the network."
    },
    {
        question: "Are penetration tests performed on segmentation controls annually?",
        domain: "Penetration Testing",
        requirement: "11.3.4",
        issueIfNotCompliant: "Ineffective segmentation controls may not prevent data breaches.",
        remediation: "Perform annual penetration tests on network segmentation controls to ensure they effectively isolate the CDE from other networks."
    },
    {
        question: "Is an information security policy established and maintained?",
        domain: "Security Policy",
        requirement: "12",
        issueIfNotCompliant: "Absence of a formal policy can lead to inconsistent security practices.",
        remediation: "Establish and maintain a comprehensive information security policy, outlining security requirements and procedures for the organization."
    },
    {
        question: "Is the information security policy reviewed and updated annually?",
        domain: "Security Policy Management",
        requirement: "12.1.1",
        issueIfNotCompliant: "Outdated policies may not address current threats and changes.",
        remediation: "Regularly review and update the information security policy at least annually to ensure it remains relevant and effective."
    },
    {
        question: "Are roles and responsibilities defined in the security policy?",
        domain: "Security Policy",
        requirement: "12.1",
        issueIfNotCompliant: "Unclear roles can lead to security oversights and confusion.",
        remediation: "Clearly define and document roles and responsibilities related to security within the organization's information security policy."
    },
    {
        question: "Is a formal security awareness program implemented?",
        domain: "Training and Awareness",
        requirement: "12.6",
        issueIfNotCompliant: "Employees unaware of security risks can inadvertently cause breaches.",
        remediation: "Implement a formal security awareness program to educate employees about security risks and their responsibilities in protecting data."
    },
    {
        question: "Is a list of TPSPs with which account data is shared maintained?",
        domain: "Third-Party Service Providers (TPSPs)",
        requirement: "12.8",
        issueIfNotCompliant: "Untracked sharing of account data with TPSPs can lead to data exposure.",
        remediation: "Maintain an accurate list of all TPSPs with whom account data is shared, including the nature of the data shared and the service provided."
    },
    {
        question: "Are written agreements with TPSPs maintained?",
        domain: "TPSP Agreements",
        requirement: "12.8.2",
        issueIfNotCompliant: "Absence of formal agreements may lead to unclear data security responsibilities.",
        remediation: "Ensure written agreements are in place with all TPSPs, specifying security responsibilities and compliance requirements."
    },
    {
        question: "Is there a process for engaging TPSPs?",
        domain: "TPSP Management",
        requirement: "12.8.1",
        issueIfNotCompliant: "Engaging TPSPs without a formal process can introduce risks.",
        remediation: "Develop and follow a formal process for engaging TPSPs, including security evaluations and agreement on compliance requirements."
    },
    {
        question: "Is TPSPs’ PCI DSS compliance status monitored annually?",
        domain: "TPSP Compliance",
        requirement: "12.8.4",
        issueIfNotCompliant: "Unmonitored TPSPs may not maintain compliance, risking data security.",
        remediation: "Monitor the PCI DSS compliance status of TPSPs annually to ensure they continue to meet required security standards."
    },
    {
        question: "Is information about PCI DSS requirements managed by TPSPs maintained?",
        domain: "TPSP Compliance Information",
        requirement: "12.8.5",
        issueIfNotCompliant: "Lack of information can lead to uncertainty about TPSPs’ security practices.",
        remediation: "Maintain detailed information about the PCI DSS requirements handled by TPSPs, ensuring clarity on their compliance roles."
    },
    {
        question: "Does an incident response plan exist for suspected or confirmed incidents?",
        domain: "Incident Response",
        requirement: "12.10",
        issueIfNotCompliant: "Without a response plan, handling incidents can be delayed or ineffective.",
        remediation: "Develop and maintain an incident response plan for managing suspected or confirmed security incidents, ensuring prompt and effective actions are taken."
    }
]