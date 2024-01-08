interface SecurityQuestion {
  question: string;
  domain: string;
  requirement: string;
  issueIfNotCompliant: string;
  remediation: string;
}

export const answersB: SecurityQuestion[] = [
  {
    question:
      "Is an accurate network diagram maintained showing all connections to the CDE?",
    domain: "Network Diagram",
    requirement: "1.1.2",
    issueIfNotCompliant:
      "Lack of clear understanding of data flows and connections.",
    remediation:
      "Regularly update and maintain an accurate network diagram that includes all connections to the cardholder data environment (CDE).",
  },
  {
    question: "Does the network diagram include all wireless networks?",
    domain: "Network Diagram",
    requirement: "1.1.2",
    issueIfNotCompliant:
      "Overlooking wireless networks can lead to unsecured access points.",
    remediation:
      "Ensure the network diagram comprehensively includes all wireless networks connected to the CDE, showing their interactions and boundaries.",
  },
  {
    question: "Are all allowed services identified and approved?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant: "Unauthorized services may introduce vulnerabilities.",
    remediation:
      "Identify, document, and approve all services allowed within the CDE, ensuring they are necessary and secure.",
  },
  {
    question: "Do identified services have a defined business need?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Services without business justification may increase risk.",
    remediation:
      "Establish and document the business justification for each service in the CDE, ensuring it aligns with business requirements.",
  },
  {
    question: "Are all allowed protocols identified and approved?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Unapproved protocols can compromise network security.",
    remediation:
      "Clearly identify and approve all protocols used in the CDE, ensuring they meet security standards and business needs.",
  },
  {
    question: "Do identified protocols have a defined business need?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Protocols without a clear business need may be unnecessary risks.",
    remediation:
      "Document the business need for each approved protocol, validating their use in the CDE.",
  },
  {
    question: "Are all allowed ports identified and approved?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Unregulated ports can be exploited for unauthorized access.",
    remediation:
      "Identify and officially approve all ports used in the CDE, ensuring they are essential for business operations.",
  },
  {
    question: "Do identified ports have a defined business need?",
    domain: "Network Security",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Ports without a business justification may present unnecessary risks.",
    remediation:
      "Justify the use of each port in the CDE with a specific business requirement.",
  },
  {
    question: "Are security features defined for insecure services?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant: "Insecure services may lead to vulnerabilities.",
    remediation:
      "Define and implement security features to mitigate risks associated with any insecure services in use.",
  },
  {
    question: "Are security features implemented for insecure services?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant:
      "Inadequate security for services could expose the system to threats.",
    remediation:
      "Actively implement security controls and features for any services identified as insecure to enhance their security.",
  },
  {
    question: "Are security features defined for insecure protocols?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant: "Vulnerabilities in protocols can be exploited.",
    remediation:
      "Define necessary security measures for any insecure protocols to mitigate potential risks.",
  },
  {
    question: "Are security features implemented for insecure protocols?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant: "Unsecured protocols can lead to data breaches.",
    remediation:
      "Implement robust security features for all protocols that are considered insecure to strengthen the overall network security.",
  },
  {
    question: "Are security features defined for insecure ports?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant:
      "Open ports without proper security can be entry points for attackers.",
    remediation:
      "Establish security measures for any ports identified as insecure to prevent unauthorized access and data compromise.",
  },
  {
    question: "Are security features implemented for insecure ports?",
    domain: "Secure Configuration",
    requirement: "2.2",
    issueIfNotCompliant: "Insecure ports may be exploited by malicious actors.",
    remediation:
      "Apply and enforce security controls for all insecure ports to safeguard the network against unauthorized intrusions.",
  },
  {
    question:
      "Is inbound traffic to the CDE restricted to only necessary traffic?",
    domain: "Traffic Control",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Unrestricted inbound traffic can increase the risk of cyber attacks.",
    remediation:
      "Restrict inbound traffic to the CDE to only that which is necessary for business operations, effectively minimizing potential attack vectors.",
  },
  {
    question: "Is all other inbound traffic to the CDE specifically denied?",
    domain: "Traffic Control",
    requirement: "1.2.1",
    issueIfNotCompliant:
      "Failure to deny unnecessary traffic can expose the CDE to risks.",
    remediation:
      "Implement strict rules to deny all inbound traffic to the CDE that is not explicitly required for business purposes.",
  },
  {
    question:
      "Is outbound traffic from the CDE restricted to only necessary traffic?",
    domain: "Traffic Control",
    requirement: "1.3.4",
    issueIfNotCompliant:
      "Uncontrolled outbound traffic can lead to data leakage.",
    remediation:
      "Limit outbound traffic from the CDE to only traffic that is essential, reducing the risk of sensitive data being transmitted inappropriately.",
  },
  {
    question: "Is all other outbound traffic from the CDE specifically denied?",
    domain: "Traffic Control",
    requirement: "1.3.4",
    issueIfNotCompliant:
      "Unrestricted outbound traffic may compromise data security.",
    remediation:
      "Enforce rules to specifically deny any outbound traffic from the CDE that is not necessary for authorized business activities.",
  },
  {
    question: "Are NSCs installed between wireless networks and the CDE?",
    domain: "Network Segmentation",
    requirement: "1.2.3",
    issueIfNotCompliant:
      "Lack of segmentation can allow easy access from wireless networks to CDE.",
    remediation:
      "Install network segmentation controls (NSCs) between any wireless networks and the CDE to prevent unauthorized access and ensure secure separation.",
  },
  {
    question: "Is all wireless traffic into the CDE denied by default?",
    domain: "Wireless Security",
    requirement: "1.2.3",
    issueIfNotCompliant:
      "Default allowance of wireless traffic can increase vulnerability.",
    remediation:
      "Set up systems to deny all wireless traffic into the CDE by default, only allowing necessary and secure wireless connections.",
  },
  {
    question:
      "Is wireless traffic allowed into the CDE only for authorized purposes?",
    domain: "Wireless Security",
    requirement: "1.2.3",
    issueIfNotCompliant:
      "Unauthorized wireless access can lead to security breaches.",
    remediation:
      "Ensure that wireless traffic is permitted into the CDE strictly for authorized and necessary purposes, with stringent security measures in place.",
  },
  {
    question:
      "Are anti-spoofing measures implemented to detect forged IP addresses?",
    domain: "Network Security",
    requirement: "1.3.2",
    issueIfNotCompliant:
      "Without anti-spoofing, forged IP addresses may access the network.",
    remediation:
      "Implement anti-spoofing measures to detect and prevent forged IP addresses from accessing the network, enhancing security against impersonation attacks.",
  },
  {
    question:
      "Are anti-spoofing measures implemented to block forged IP addresses?",
    domain: "Network Security",
    requirement: "1.3.2",
    issueIfNotCompliant: "Risk of attack from spoofed IP addresses.",
    remediation:
      "Enforce anti-spoofing mechanisms to effectively block any traffic from forged IP addresses, securing the network against such threats.",
  },
  {
    question: "How are vendor default accounts managed if they will be used?",
    domain: "Account Management",
    requirement: "2.1",
    issueIfNotCompliant:
      "Default accounts can be easily exploited if not managed properly.",
    remediation:
      "If vendor default accounts are to be used, change default passwords and implement strict management and monitoring to ensure security.",
  },
  {
    question:
      "How are vendor default accounts managed if they will not be used?",
    domain: "Account Management",
    requirement: "2.1",
    issueIfNotCompliant: "Unused default accounts can become a security risk.",
    remediation:
      "Disable or remove any vendor default accounts that will not be used to eliminate unnecessary access points into the system.",
  },
  {
    question: "Is all non-console administrative access encrypted?",
    domain: "Encryption and Access Control",
    requirement: "2.3",
    issueIfNotCompliant:
      "Unencrypted administrative access can lead to data interception.",
    remediation:
      "Ensure that all non-console administrative access is encrypted to protect against unauthorized interception and access.",
  },
  {
    question:
      "What type of cryptography is used for non-console administrative access?",
    domain: "Encryption and Access Control",
    requirement: "2.3",
    issueIfNotCompliant: "Inadequate encryption can compromise data security.",
    remediation:
      "Use strong cryptographic techniques, such as SSL/TLS, for encrypting non-console administrative access to ensure secure communications.",
  },
  {
    question:
      "Are wireless defaults changed at installation for environments connected to the CDE?",
    domain: "Wireless Security",
    requirement: "2.1.1",
    issueIfNotCompliant: "Default settings may be vulnerable to exploitation.",
    remediation:
      "Change all default settings, including passwords and SSIDs, on wireless devices before connecting them to the CDE to enhance security.",
  },
  {
    question:
      "Are wireless encryption keys changed when personnel leave the company?",
    domain: "Wireless Security",
    requirement: "4.1.1",
    issueIfNotCompliant:
      "Former employees may retain access to wireless networks.",
    remediation:
      "Regularly update wireless encryption keys, especially when personnel leave the company, to prevent unauthorized network access.",
  },
  {
    question: "Are wireless encryption keys changed when keys are compromised?",
    domain: "Wireless Security",
    requirement: "4.1.1",
    issueIfNotCompliant: "Compromised keys pose a significant security risk.",
    remediation:
      "Implement a policy to promptly change wireless encryption keys if they are suspected or known to be compromised.",
  },
  {
    question: "Are security policies for Requirement 3 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 3",
    issueIfNotCompliant:
      "Lack of documentation can lead to inconsistent policy enforcement.",
    remediation:
      "Document all security policies related to Requirement 3, ensuring they are formally recorded and accessible.",
  },
  {
    question: "Are security policies for Requirement 3 kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 3",
    issueIfNotCompliant: "Outdated policies may not address current threats.",
    remediation:
      "Regularly review and update security policies for Requirement 3 to ensure they remain relevant and effective against evolving threats.",
  },
  {
    question: "Are security policies for Requirement 3 in active use?",
    domain: "Policy Implementation",
    requirement: "12.1, 3",
    issueIfNotCompliant:
      "Policies not in use fail to protect the CDE effectively.",
    remediation:
      "Ensure that security policies for Requirement 3 are actively implemented and followed within the organization.",
  },
  {
    question:
      "Are security policies for Requirement 3 known to all affected parties?",
    domain: "Policy Awareness",
    requirement: "12.1, 3",
    issueIfNotCompliant:
      "Unawareness can lead to non-compliance and security lapses.",
    remediation:
      "Communicate security policies related to Requirement 3 to all relevant personnel, ensuring widespread understanding and adherence.",
  },
  {
    question: "Is SAD not retained after authorization?",
    domain: "Data Retention",
    requirement: "3.2",
    issueIfNotCompliant:
      "Retention of sensitive authentication data (SAD) post-authorization is a major security risk.",
    remediation:
      "Implement measures to ensure that SAD is not stored, processed, or transmitted after transaction authorization.",
  },
  {
    question:
      "Is SAD rendered unrecoverable upon completion of the authorization process?",
    domain: "Data Protection",
    requirement: "3.2",
    issueIfNotCompliant:
      "Recoverable SAD post-authorization increases the risk of fraud.",
    remediation:
      "Use secure methods to render SAD completely unrecoverable after the authorization process is completed.",
  },
  {
    question:
      "Is the full content of any track not retained after authorization?",
    domain: "Data Retention",
    requirement: "3.2.1",
    issueIfNotCompliant:
      "Storing full track data is prohibited and increases data breach risks.",
    remediation:
      "Ensure no full track data from the magnetic stripe, equivalent chip data, or elsewhere is stored after transaction authorization.",
  },
  {
    question: "Is the card verification code not retained after authorization?",
    domain: "Data Retention",
    requirement: "3.2.2",
    issueIfNotCompliant:
      "Retaining card verification codes post-authorization is a significant security violation.",
    remediation:
      "Implement strict controls to ensure card verification codes or values are not retained after authorization.",
  },
  {
    question: "Is the PIN and PIN block not retained after authorization?",
    domain: "Data Retention",
    requirement: "3.2.3",
    issueIfNotCompliant:
      "Storing PINs or PIN blocks post-authorization is highly risky.",
    remediation:
      "Prohibit the retention of PINs and PIN blocks once the transaction authorization process is completed.",
  },
  {
    question: "Is PAN masked when displayed?",
    domain: "PAN Protection",
    requirement: "3.3",
    issueIfNotCompliant:
      "Unmasked PAN displays increase the risk of unauthorized disclosure.",
    remediation:
      "Mask PAN when displayed, ensuring that only minimal digits are visible, necessary for business purposes.",
  },
  {
    question: "Are only necessary digits of PAN displayed?",
    domain: "PAN Protection",
    requirement: "3.3",
    issueIfNotCompliant:
      "Displaying full PAN unnecessarily can lead to data exposure.",
    remediation:
      "Ensure that only the minimum number of digits necessary for business needs are displayed while masking the rest of the PAN.",
  },
  {
    question: "How are new security vulnerabilities identified?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Failure to identify new vulnerabilities can leave systems unprotected.",
    remediation:
      "Establish a process to regularly identify new security vulnerabilities, utilizing trusted sources of vulnerability information.",
  },
  {
    question: "Are vulnerabilities assigned a risk ranking?",
    domain: "Risk Assessment",
    requirement: "6.1",
    issueIfNotCompliant:
      "Without risk ranking, critical vulnerabilities may not be prioritized.",
    remediation:
      "Assign a risk ranking to each identified vulnerability to prioritize mitigation efforts based on the level of risk.",
  },
  {
    question: "Are high-risk vulnerabilities identified?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Overlooking high-risk vulnerabilities can lead to severe security breaches.",
    remediation:
      "Have a clear process to identify and categorize high-risk vulnerabilities, ensuring they are addressed promptly and effectively.",
  },
  {
    question: "Are critical vulnerabilities identified?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Not identifying critical vulnerabilities can result in significant security incidents.",
    remediation:
      "Implement mechanisms to identify critical vulnerabilities, ensuring immediate action is taken to mitigate risks.",
  },
  {
    question: "Are security patches installed within one month of release?",
    domain: "Patch Management",
    requirement: "6.2",
    issueIfNotCompliant:
      "Delayed patch installation can leave systems vulnerable to known risks.",
    remediation:
      "Develop a policy to install security patches within one month of their release to ensure systems are protected against known vulnerabilities.",
  },
  {
    question: "Is access assigned to users based on job classification?",
    domain: "Access Control",
    requirement: "7.1.1",
    issueIfNotCompliant:
      "Access not aligned with job duties can lead to unnecessary data exposure.",
    remediation:
      "Assign access rights based on users' job classifications, ensuring access is appropriate for their role and responsibilities.",
  },
  {
    question: "Is access assigned based on the least privilege necessary?",
    domain: "Access Control",
    requirement: "7.1.2",
    issueIfNotCompliant:
      "Excessive privileges increase the risk of data compromise.",
    remediation:
      "Implement the principle of least privilege, ensuring users have only the minimum access necessary for their job functions.",
  },
  {
    question: "Are security policies for Requirement 8 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Undocumented policies can lead to inconsistent implementation.",
    remediation:
      "Document all security policies related to Requirement 8, ensuring clarity and accessibility for relevant personnel.",
  },
  {
    question: "Are security policies for Requirement 8 kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Outdated policies may not effectively address current threats.",
    remediation:
      "Regularly review and update security policies related to Requirement 8, keeping them relevant and effective.",
  },
  {
    question: "Are security policies for Requirement 8 in active use?",
    domain: "Policy Implementation",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Policies not actively followed can lead to security gaps.",
    remediation:
      "Ensure that all security policies for Requirement 8 are actively implemented and adhered to within the organization.",
  },
  {
    question:
      "Are security policies for Requirement 8 known to all affected parties?",
    domain: "Policy Awareness",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Lack of awareness can result in non-compliance and security breaches.",
    remediation:
      "Communicate all security policies related to Requirement 8 to all affected parties, ensuring widespread understanding and compliance.",
  },
  {
    question: "How are group accounts managed for exceptional circumstances?",
    domain: "Account Management",
    requirement: "8",
    issueIfNotCompliant: "Mismanaged group accounts can pose security risks.",
    remediation:
      "Establish strict guidelines and monitoring for the use of group accounts, allowing them only in exceptional circumstances with proper controls.",
  },
  {
    question: "How are shared accounts managed for exceptional circumstances?",
    domain: "Account Management",
    requirement: "8",
    issueIfNotCompliant: "Shared accounts can lead to accountability issues.",
    remediation:
      "Implement rigorous management and oversight for shared accounts, restricting their use to necessary situations with full auditing.",
  },
  {
    question:
      "Are third-party remote access accounts enabled only when needed?",
    domain: "Remote Access",
    requirement: "8.1.5",
    issueIfNotCompliant:
      "Constantly enabled third-party access can be a security vulnerability.",
    remediation:
      "Ensure third-party remote access accounts are enabled only when required and disabled immediately afterward to minimize risks.",
  },
  {
    question:
      "Are third-party remote access accounts monitored for unexpected activity?",
    domain: "Remote Access",
    requirement: "10.2.5",
    issueIfNotCompliant:
      "Lack of monitoring can lead to undetected unauthorized access.",
    remediation:
      "Continuously monitor third-party remote access accounts for any unusual or unexpected activity, responding promptly to any anomalies.",
  },
  {
    question:
      "Is MFA implemented for all remote network access from outside the entity’s network?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant:
      "Single-factor authentication for remote access is vulnerable to compromise.",
    remediation:
      "Implement multi-factor authentication (MFA) for all remote network access originating from outside the entity's network to enhance security.",
  },
  {
    question: "Are security policies for Requirement 9 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Lack of documentation can lead to inconsistencies and gaps in physical security.",
    remediation:
      "Document all security policies related to Requirement 9, ensuring they are clear, comprehensive, and accessible.",
  },
  {
    question: "Are security policies for Requirement 9 kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Outdated policies may not address current physical security challenges.",
    remediation:
      "Regularly review and update physical security policies as per Requirement 9 to address evolving threats and changes in the environment.",
  },
  {
    question: "Are security policies for Requirement 9 in active use?",
    domain: "Policy Implementation",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Physical security policies not in use can result in vulnerabilities.",
    remediation:
      "Actively implement and enforce physical security policies in line with Requirement 9, ensuring effective protection of cardholder data.",
  },
  {
    question:
      "Are security policies for Requirement 9 known to all affected parties?",
    domain: "Policy Awareness",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Unawareness of physical security policies can lead to breaches.",
    remediation:
      "Communicate all physical security policies to relevant personnel, ensuring understanding and compliance.",
  },
  {
    question: "Are physical controls implemented to restrict network jack use?",
    domain: "Physical Access Control",
    requirement: "9.1.2",
    issueIfNotCompliant:
      "Unrestricted network jacks can be exploited for unauthorized access.",
    remediation:
      "Implement physical controls to restrict the use of network jacks, preventing unauthorized network access.",
  },
  {
    question: "Are logical controls implemented to restrict network jack use?",
    domain: "Network Access Control",
    requirement: "1.1.6",
    issueIfNotCompliant:
      "Lack of logical controls may lead to network breaches.",
    remediation:
      "Use logical controls, such as network access control lists, to manage and restrict the use of network jacks.",
  },
  {
    question: "Is media with cardholder data physically secured?",
    domain: "Media Protection",
    requirement: "9.6",
    issueIfNotCompliant: "Unsecured media can be easily accessed or stolen.",
    remediation:
      "Secure all media containing cardholder data in locked and access-controlled storage areas to prevent unauthorized access.",
  },
  {
    question: "Are offline media backups with cardholder data stored securely?",
    domain: "Media Backups",
    requirement: "9.5",
    issueIfNotCompliant:
      "Insecurely stored backups can be a target for theft or unauthorized access.",
    remediation:
      "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats.",
  },
  {
    question:
      "Is media with cardholder data classified according to sensitivity?",
    domain: "Media Classification",
    requirement: "9.6.1",
    issueIfNotCompliant:
      "Without classification, media may not receive the appropriate level of protection.",
    remediation:
      "Classify media containing cardholder data based on sensitivity, ensuring that higher sensitivity media receives stronger protection measures.",
  },
  {
    question:
      "How is media with cardholder data secured for external transport?",
    domain: "Media Transport",
    requirement: "9.6",
    issueIfNotCompliant:
      "Media transported without adequate security measures can be compromised.",
    remediation:
      "Implement strict security protocols for the external transport of media, including encryption and secure containers, to protect cardholder data.",
  },
  {
    question:
      "Does management approve moving cardholder data outside the facility?",
    domain: "Data Movement",
    requirement: "9.6",
    issueIfNotCompliant:
      "Unapproved data movement can lead to data loss or exposure.",
    remediation:
      "Require management approval for any movement of cardholder data outside the facility, ensuring oversight and accountability.",
  },
  {
    question: "How are hard-copy materials with cardholder data destroyed?",
    domain: "Data Destruction",
    requirement: "9.8.2",
    issueIfNotCompliant:
      "Improperly destroyed materials can lead to data recovery and misuse.",
    remediation:
      "Employ secure destruction methods for hard-copy materials containing cardholder data, such as cross-cut shredding or incineration, to ensure data is unrecoverable.",
  },
  {
    question: "Are POI devices protected from tampering and substitution?",
    domain: "Physical Security",
    requirement: "9.9",
    issueIfNotCompliant: "Tampered POI devices can lead to data breaches.",
    remediation:
      "Implement measures to protect Point of Interaction (POI) devices from tampering and substitution, including physical security controls and regular inspections.",
  },
  {
    question: "Is an up-to-date list of POI devices maintained?",
    domain: "Inventory Management",
    requirement: "9.9.1",
    issueIfNotCompliant:
      "Lack of inventory control can result in unmanaged devices.",
    remediation:
      "Maintain a current inventory of all POI devices, including their location and unique identifier, to track and manage them effectively.",
  },
  {
    question: "Are POI device surfaces inspected for tampering?",
    domain: "Physical Security",
    requirement: "9.9.2",
    issueIfNotCompliant: "Undetected tampering can compromise data security.",
    remediation:
      "Regularly inspect the surfaces of POI devices for tampering, looking for signs like skimming devices or unusual attachments.",
  },
  {
    question: "Is training provided for POI device security?",
    domain: "Training and Awareness",
    requirement: "9.9.3",
    issueIfNotCompliant:
      "Lack of awareness can lead to missed signs of device tampering.",
    remediation:
      "Provide training to staff on recognizing signs of POI device tampering and the proper actions to take if tampering is suspected.",
  },
  {
    question: "Are external vulnerability scans performed every three months?",
    domain: "Vulnerability Scans",
    requirement: "11.2.2",
    issueIfNotCompliant: "Unidentified vulnerabilities can pose ongoing risks.",
    remediation:
      "Conduct external vulnerability scans at least quarterly to identify and address vulnerabilities outside the network.",
  },
  {
    question: "Are high-risk vulnerabilities identified?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Overlooking high-risk vulnerabilities can lead to severe security breaches.",
    remediation:
      "Have a clear process to identify and categorize high-risk vulnerabilities, ensuring they are addressed promptly and effectively.",
  },
  {
    question: "Are critical vulnerabilities identified?",
    domain: "Vulnerability Management",
    requirement: "6.1",
    issueIfNotCompliant:
      "Not identifying critical vulnerabilities can result in significant security incidents.",
    remediation:
      "Implement mechanisms to identify critical vulnerabilities, ensuring immediate action is taken to mitigate risks.",
  },
  {
    question: "Are security patches installed within one month of release?",
    domain: "Patch Management",
    requirement: "6.2",
    issueIfNotCompliant:
      "Delayed patch installation can leave systems vulnerable to known risks.",
    remediation:
      "Develop a policy to install security patches within one month of their release to ensure systems are protected against known vulnerabilities.",
  },
  {
    question: "Is access assigned to users based on job classification?",
    domain: "Access Control",
    requirement: "7.1.1",
    issueIfNotCompliant:
      "Access not aligned with job duties can lead to unnecessary data exposure.",
    remediation:
      "Assign access rights based on users' job classifications, ensuring access is appropriate for their role and responsibilities.",
  },
  {
    question: "Is access assigned based on the least privilege necessary?",
    domain: "Access Control",
    requirement: "7.1.2",
    issueIfNotCompliant:
      "Excessive privileges increase the risk of data compromise.",
    remediation:
      "Implement the principle of least privilege, ensuring users have only the minimum access necessary for their job functions.",
  },
  {
    question: "Are security policies for Requirement 8 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Undocumented policies can lead to inconsistent implementation.",
    remediation:
      "Document all security policies related to Requirement 8, ensuring clarity and accessibility for relevant personnel.",
  },
  {
    question: "Are security policies for Requirement 8 kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Outdated policies may not effectively address current threats.",
    remediation:
      "Regularly review and update security policies related to Requirement 8, keeping them relevant and effective.",
  },
  {
    question: "Are security policies for Requirement 8 in active use?",
    domain: "Policy Implementation",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Policies not actively followed can lead to security gaps.",
    remediation:
      "Ensure that all security policies for Requirement 8 are actively implemented and adhered to within the organization.",
  },
  {
    question:
      "Are security policies for Requirement 8 known to all affected parties?",
    domain: "Policy Awareness",
    requirement: "12.1, 8",
    issueIfNotCompliant:
      "Lack of awareness can result in non-compliance and security breaches.",
    remediation:
      "Communicate all security policies related to Requirement 8 to all affected parties, ensuring widespread understanding and compliance.",
  },
  {
    question: "How are group accounts managed for exceptional circumstances?",
    domain: "Account Management",
    requirement: "8",
    issueIfNotCompliant: "Mismanaged group accounts can pose security risks.",
    remediation:
      "Establish strict guidelines and monitoring for the use of group accounts, allowing them only in exceptional circumstances with proper controls.",
  },
  {
    question: "How are shared accounts managed for exceptional circumstances?",
    domain: "Account Management",
    requirement: "8",
    issueIfNotCompliant: "Shared accounts can lead to accountability issues.",
    remediation:
      "Implement rigorous management and oversight for shared accounts, restricting their use to necessary situations with full auditing.",
  },
  {
    question:
      "Are third-party remote access accounts enabled only when needed?",
    domain: "Remote Access",
    requirement: "8.1.5",
    issueIfNotCompliant:
      "Constantly enabled third-party access can be a security vulnerability.",
    remediation:
      "Ensure third-party remote access accounts are enabled only when required and disabled immediately afterward to minimize risks.",
  },
  {
    question:
      "Are third-party remote access accounts monitored for unexpected activity?",
    domain: "Remote Access",
    requirement: "10.2.5",
    issueIfNotCompliant:
      "Lack of monitoring can lead to undetected unauthorized access.",
    remediation:
      "Continuously monitor third-party remote access accounts for any unusual or unexpected activity, responding promptly to any anomalies.",
  },
  {
    question:
      "Is MFA implemented for all remote network access from outside the entity’s network?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant:
      "Single-factor authentication for remote access is vulnerable to compromise.",
    remediation:
      "Implement multi-factor authentication (MFA) for all remote network access originating from outside the entity's network to enhance security.",
  },
  {
    question: "Are security policies for Requirement 9 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Lack of documentation can lead to inconsistencies and gaps in physical security.",
    remediation:
      "Document all security policies related to Requirement 9, ensuring they are clear, comprehensive, and accessible.",
  },
  {
    question: "Are security policies for Requirement 9 kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Outdated policies may not address current physical security challenges.",
    remediation:
      "Regularly review and update physical security policies as per Requirement 9 to address evolving threats and changes in the environment.",
  },
  {
    question: "Are security policies for Requirement 9 in active use?",
    domain: "Policy Implementation",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Physical security policies not in use can result in vulnerabilities.",
    remediation:
      "Actively implement and enforce physical security policies in line with Requirement 9, ensuring effective protection of cardholder data.",
  },
  {
    question:
      "Are security policies for Requirement 9 known to all affected parties?",
    domain: "Policy Awareness",
    requirement: "12.1, 9",
    issueIfNotCompliant:
      "Unawareness of physical security policies can lead to breaches.",
    remediation:
      "Communicate all physical security policies to relevant personnel, ensuring understanding and compliance.",
  },
  {
    question: "Are physical controls implemented to restrict network jack use?",
    domain: "Physical Access Control",
    requirement: "9.1.2",
    issueIfNotCompliant:
      "Unrestricted network jacks can be exploited for unauthorized access.",
    remediation:
      "Implement physical controls to restrict the use of network jacks, preventing unauthorized network access.",
  },
  {
    question: "Are logical controls implemented to restrict network jack use?",
    domain: "Network Access Control",
    requirement: "1.1.6",
    issueIfNotCompliant:
      "Lack of logical controls may lead to network breaches.",
    remediation:
      "Use logical controls, such as network access control lists, to manage and restrict the use of network jacks.",
  },
  {
    question: "Is media with cardholder data physically secured?",
    domain: "Media Protection",
    requirement: "9.6",
    issueIfNotCompliant: "Unsecured media can be easily accessed or stolen.",
    remediation:
      "Secure all media containing cardholder data in locked and access-controlled storage areas to prevent unauthorized access.",
  },
  {
    question: "Are offline media backups with cardholder data stored securely?",
    domain: "Media Backups",
    requirement: "9.5",
    issueIfNotCompliant:
      "Insecurely stored backups can be a target for theft or unauthorized access.",
    remediation:
      "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats.",
  },
  {
    question:
      "Is media with cardholder data classified according to sensitivity?",
    domain: "Media Classification",
    requirement: "9.6.1",
    issueIfNotCompliant:
      "Without classification, media may not receive the appropriate level of protection.",
    remediation:
      "Classify media containing cardholder data based on sensitivity, ensuring that higher sensitivity media receives stronger protection measures.",
  },
  {
    question:
      "How is media with cardholder data secured for external transport?",
    domain: "Media Transport",
    requirement: "9.6",
    issueIfNotCompliant:
      "Media transported without adequate security measures can be compromised.",
    remediation:
      "Implement strict security protocols for the external transport of media, including encryption and secure containers, to protect cardholder data.",
  },
  {
    question:
      "Does management approve moving cardholder data outside the facility?",
    domain: "Data Movement",
    requirement: "9.6",
    issueIfNotCompliant:
      "Unapproved data movement can lead to data loss or exposure.",
    remediation:
      "Require management approval for any movement of cardholder data outside the facility, ensuring oversight and accountability.",
  },
  {
    question: "How are hard-copy materials with cardholder data destroyed?",
    domain: "Data Destruction",
    requirement: "9.8.2",
    issueIfNotCompliant:
      "Improperly destroyed materials can lead to data recovery and misuse.",
    remediation:
      "Employ secure destruction methods for hard-copy materials containing cardholder data, such as cross-cut shredding or incineration, to ensure data is unrecoverable.",
  },
  {
    question: "Are POI devices protected from tampering and substitution?",
    domain: "Physical Security",
    requirement: "9.9",
    issueIfNotCompliant: "Tampered POI devices can lead to data breaches.",
    remediation:
      "Implement measures to protect Point of Interaction (POI) devices from tampering and substitution, including physical security controls and regular inspections.",
  },
  {
    question: "Is an up-to-date list of POI devices maintained?",
    domain: "Inventory Management",
    requirement: "9.9.1",
    issueIfNotCompliant:
      "Lack of inventory control can result in unmanaged devices.",
    remediation:
      "Maintain a current inventory of all POI devices, including their location and unique identifier, to track and manage them effectively.",
  },
  {
    question: "Are POI device surfaces inspected for tampering?",
    domain: "Physical Security",
    requirement: "9.9.2",
    issueIfNotCompliant: "Undetected tampering can compromise data security.",
    remediation:
      "Regularly inspect the surfaces of POI devices for tampering, looking for signs like skimming devices or unusual attachments.",
  },
  {
    question: "Is training provided for POI device security?",
    domain: "Training and Awareness",
    requirement: "9.9.3",
    issueIfNotCompliant:
      "Lack of awareness can lead to missed signs of device tampering.",
    remediation:
      "Provide training to staff on recognizing signs of POI device tampering and the proper actions to take if tampering is suspected.",
  },
  {
    question: "Are external vulnerability scans performed every three months?",
    domain: "Vulnerability Scans",
    requirement: "11.2.2",
    issueIfNotCompliant: "Unidentified vulnerabilities can pose ongoing risks.",
    remediation:
      "Conduct external vulnerability scans at least quarterly to identify and address vulnerabilities outside the network.",
  },

  {
    question:
      "Are penetration tests performed on segmentation controls annually?",
    domain: "Penetration Testing",
    requirement: "11.3.4",
    issueIfNotCompliant:
      "Ineffective segmentation controls may not prevent data breaches.",
    remediation:
      "Perform annual penetration tests on network segmentation controls to ensure they effectively isolate the CDE from other networks.",
  },
  {
    question: "Is an information security policy established and maintained?",
    domain: "Security Policy",
    requirement: "12",
    issueIfNotCompliant:
      "Absence of a formal policy can lead to inconsistent security practices.",
    remediation:
      "Establish and maintain a comprehensive information security policy, outlining security requirements and procedures for the organization.",
  },
  {
    question:
      "Is the information security policy reviewed and updated annually?",
    domain: "Security Policy Management",
    requirement: "12.1.1",
    issueIfNotCompliant:
      "Outdated policies may not address current threats and changes.",
    remediation:
      "Regularly review and update the information security policy at least annually to ensure it remains relevant and effective.",
  },
  {
    question: "Are roles and responsibilities defined in the security policy?",
    domain: "Security Policy",
    requirement: "12.1",
    issueIfNotCompliant:
      "Unclear roles can lead to security oversights and confusion.",
    remediation:
      "Clearly define and document roles and responsibilities related to security within the organization's information security policy.",
  },
  {
    question: "Is a formal security awareness program implemented?",
    domain: "Training and Awareness",
    requirement: "12.6",
    issueIfNotCompliant:
      "Employees unaware of security risks can inadvertently cause breaches.",
    remediation:
      "Implement a formal security awareness program to educate employees about security risks and their responsibilities in protecting data.",
  },
  {
    question:
      "Is a list of TPSPs with which account data is shared maintained?",
    domain: "Third-Party Service Providers (TPSPs)",
    requirement: "12.8",
    issueIfNotCompliant:
      "Untracked sharing of account data with TPSPs can lead to data exposure.",
    remediation:
      "Maintain an accurate list of all TPSPs with whom account data is shared, including the nature of the data shared and the service provided.",
  },
  {
    question: "Are written agreements with TPSPs maintained?",
    domain: "TPSP Agreements",
    requirement: "12.8.2",
    issueIfNotCompliant:
      "Absence of formal agreements may lead to unclear data security responsibilities.",
    remediation:
      "Ensure written agreements are in place with all TPSPs, specifying security responsibilities and compliance requirements.",
  },
  {
    question: "Is there a process for engaging TPSPs?",
    domain: "TPSP Management",
    requirement: "12.8.1",
    issueIfNotCompliant:
      "Engaging TPSPs without a formal process can introduce risks.",
    remediation:
      "Develop and follow a formal process for engaging TPSPs, including security evaluations and agreement on compliance requirements.",
  },
  {
    question: "Is TPSPs’ PCI DSS compliance status monitored annually?",
    domain: "TPSP Compliance",
    requirement: "12.8.4",
    issueIfNotCompliant:
      "Unmonitored TPSPs may not maintain compliance, risking data security.",
    remediation:
      "Monitor the PCI DSS compliance status of TPSPs annually to ensure they continue to meet required security standards.",
  },
  {
    question:
      "Is information about PCI DSS requirements managed by TPSPs maintained?",
    domain: "TPSP Compliance Information",
    requirement: "12.8.5",
    issueIfNotCompliant:
      "Lack of information can lead to uncertainty about TPSPs’ security practices.",
    remediation:
      "Maintain detailed information about the PCI DSS requirements handled by TPSPs, ensuring clarity on their compliance roles.",
  },
  {
    question:
      "Does an incident response plan exist for suspected or confirmed incidents?",
    domain: "Incident Response",
    requirement: "12.10",
    issueIfNotCompliant:
      "Without a response plan, handling incidents can be delayed or ineffective.",
    remediation:
      "Develop and maintain an incident response plan for managing suspected or confirmed security incidents, ensuring prompt and effective actions are taken.",
  },
];
