interface SecurityQuestion {
  question: string;
  domain: string;
  requirement: string;
  issueIfNotCompliant: string;
  remediation: string;
}

export const answersP2PE: SecurityQuestion[] = [
  {
    question:
      "Are all security policies and operational procedures for Requirement 3 documented?",
    domain: "Policy Documentation",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Lack of documented policies can lead to inconsistent protection of stored data.",
    remediation:
      "Document all security policies and operational procedures related to the protection of stored data, as required by P2PE Requirement 3.",
  },
  {
    question: "Are these policies and procedures kept up to date?",
    domain: "Policy Management",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Outdated policies may not effectively address current threats or compliance requirements.",
    remediation:
      "Regularly review and update all policies and procedures related to stored data to ensure they remain relevant and compliant.",
  },
  {
    question: "Are these policies and procedures in active use?",
    domain: "Policy Implementation",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Policies not in use can lead to security breaches and non-compliance.",
    remediation:
      "Ensure that the policies and procedures for protecting stored data are actively implemented and followed within the organization.",
  },
  {
    question:
      "Are all affected parties aware of these policies and procedures?",
    domain: "Policy Awareness",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Unawareness can lead to non-compliance and potential data breaches.",
    remediation:
      "Communicate the relevant policies and procedures to all parties involved, ensuring awareness and understanding.",
  },
  {
    question:
      "Is account data storage minimized through data retention and disposal policies?",
    domain: "Data Retention and Disposal",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Excessive data storage increases the risk of data breaches.",
    remediation:
      "Implement data retention and disposal policies that minimize the storage of account data, keeping only what is legally or operationally necessary.",
  },
  {
    question: "Is there coverage for all locations of stored account data?",
    domain: "Data Storage Coverage",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Inadequate coverage can leave some stored data unprotected.",
    remediation:
      "Ensure that policies and security controls cover all locations where account data is stored.",
  },
  {
    question:
      "Are procedures in place for sensitive authentication data stored prior to authorization?",
    domain: "Sensitive Data Handling",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Improper handling of data prior to authorization can lead to security vulnerabilities.",
    remediation:
      "Establish procedures for handling sensitive authentication data stored before authorization, ensuring its protection and secure processing.",
  },
  {
    question:
      "Are data storage amount and retention time limited to legal or regulatory requirements?",
    domain: "Compliance with Legal Requirements",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Storing data beyond legal requirements can increase liability and risk.",
    remediation:
      "Limit the amount of stored data and retention time to what is required by legal or regulatory obligations.",
  },
  {
    question:
      "Are there specific retention requirements for stored account data?",
    domain: "Data Retention Requirements",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Lack of specific retention requirements can lead to excessive data storage.",
    remediation:
      "Define and implement specific retention requirements for stored account data, adhering to legal, regulatory, and business needs.",
  },
  {
    question:
      "Are processes in place for secure deletion of account data when no longer needed?",
    domain: "Secure Data Deletion",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Inadequately deleted data can be recovered and misused.",
    remediation:
      "Establish secure processes for the deletion of account data once it is no longer needed, ensuring it is irrecoverable.",
  },
  {
    question:
      "Is the process for verifying the deletion of account data performed every three months?",
    domain: "Deletion Verification",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Failure to verify deletion can result in unintended data retention.",
    remediation:
      "Regularly verify, at least every three months, that account data deletion processes are effective and that data is indeed irrecoverable.",
  },
  {
    question:
      "Is the card verification code not retained after the authorization process?",
    domain: "Data Retention",
    requirement: "P2PE 3",
    issueIfNotCompliant:
      "Retention of card verification codes post-authorization is a security risk.",
    remediation:
      "Ensure that card verification codes are not retained after the completion of the authorization process.",
  },
  {
    question: "Are all security policies for Requirement 9 documented?",
    domain: "Policy Documentation",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Undocumented policies can lead to inconsistencies and security gaps.",
    remediation:
      "Document all security policies related to Requirement 9, ensuring clarity and accessibility for all involved parties.",
  },
  {
    question: "Are these policies kept up to date?",
    domain: "Policy Management",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Outdated policies may not address current threats or compliance requirements effectively.",
    remediation:
      "Regularly review and update policies related to Requirement 9 to ensure they are current and effective.",
  },
  {
    question: "Are these policies in active use?",
    domain: "Policy Implementation",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Policies not actively followed can lead to security breaches and non-compliance.",
    remediation:
      "Ensure that the policies for Requirement 9 are actively implemented and adhered to within the organization.",
  },
  {
    question: "Are all affected parties aware of these policies?",
    domain: "Policy Awareness",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Lack of awareness can lead to non-compliance and potential security breaches.",
    remediation:
      "Communicate the relevant policies related to Requirement 9 to all parties involved, ensuring awareness and understanding.",
  },
  {
    question: "Is all media with cardholder data physically secured?",
    domain: "Media Protection",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Unsecured media can be easily accessed or stolen, leading to data breaches.",
    remediation:
      "Implement measures to physically secure all media containing cardholder data, preventing unauthorized access.",
  },
  {
    question:
      "Are offline media backups with cardholder data stored in a secure location?",
    domain: "Media Backups",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Insecure storage of backups can be a target for theft or unauthorized access.",
    remediation:
      "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats.",
  },
  {
    question:
      "Are hard-copy materials with cardholder data destroyed when no longer needed?",
    domain: "Data Destruction",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Improperly destroyed materials can lead to data recovery and misuse.",
    remediation:
      "Employ secure destruction methods, such as cross-cut shredding or incineration, for hard-copy materials containing cardholder data when they are no longer needed.",
  },
  {
    question:
      "Are materials cross-cut shredded, incinerated, or pulped for destruction?",
    domain: "Secure Destruction Methods",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Inadequate destruction methods can leave data recoverable.",
    remediation:
      "Use effective destruction methods like cross-cut shredding, incineration, or pulping to ensure that discarded materials with cardholder data are unrecoverable.",
  },
  {
    question:
      "Are materials stored in secure storage containers prior to destruction?",
    domain: "Secure Storage",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Unsecured storage prior to destruction can lead to unauthorized access.",
    remediation:
      "Store sensitive materials in secure storage containers before their destruction to protect them from unauthorized access or theft.",
  },
  {
    question:
      "Are POI devices protected from tampering and unauthorized substitution?",
    domain: "Device Security",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Tampered or substituted POI devices can compromise cardholder data.",
    remediation:
      "Implement measures to protect POI devices from tampering and unauthorized substitution, including physical security controls and regular inspections.",
  },
  {
    question: "Is a list of POI devices maintained?",
    domain: "Inventory Management",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Lack of device inventory can result in unmanaged and potentially compromised devices.",
    remediation:
      "Maintain an up-to-date list of all POI devices, including their location and unique identifier, for effective tracking and management.",
  },
  {
    question:
      "Are POI devices periodically inspected for tampering or substitution?",
    domain: "Device Inspection",
    requirement: "P2PE 9",
    issueIfNotCompliant: "Undetected tampering can compromise data security.",
    remediation:
      "Regularly inspect POI devices to check for signs of tampering or unauthorized substitution, and take appropriate action if any issues are found.",
  },
  {
    question: "Is training provided to personnel in POI environments?",
    domain: "Staff Training",
    requirement: "P2PE 9",
    issueIfNotCompliant:
      "Untrained personnel may not recognize signs of tampering or know how to respond.",
    remediation:
      "Provide training to personnel working in POI environments on how to recognize and respond to signs of device tampering or substitution.",
  },
  {
    question:
      "Are personnel trained to verify the identity of third-party repair personnel?",
    domain: "Personnel Training",
    requirement: "P2PE",
    issueIfNotCompliant:
      "Unauthorized access by unverified individuals could lead to security breaches.",
    remediation:
      "Provide training to personnel on how to properly verify the identity of third-party repair staff to ensure only authorized individuals gain access.",
  },
  {
    question:
      "Are procedures in place to ensure secure installation of POI devices?",
    domain: "Device Security",
    requirement: "P2PE",
    issueIfNotCompliant:
      "Improperly installed POI devices may be vulnerable to tampering or data breaches.",
    remediation:
      "Establish and follow strict procedures for the secure installation of POI devices, including checks for physical security and data integrity.",
  },
  {
    question: "Are suspicious behaviors around POI devices reported?",
    domain: "Security Monitoring",
    requirement: "P2PE",
    issueIfNotCompliant:
      "Unreported suspicious activities can lead to security incidents.",
    remediation:
      "Implement a protocol for reporting and responding to any suspicious behaviors observed around POI devices.",
  },
  {
    question:
      "Is an overall information security policy established and maintained?",
    domain: "Security Policy",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Lack of a comprehensive security policy can result in inconsistent security practices.",
    remediation:
      "Develop and maintain a comprehensive information security policy that covers all aspects of data security and compliance.",
  },
  {
    question:
      "Is the information security policy disseminated to relevant personnel and vendors?",
    domain: "Policy Communication",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Personnel and vendors unaware of the security policy cannot comply with its guidelines.",
    remediation:
      "Ensure the security policy is effectively communicated to all relevant personnel and vendors.",
  },
  {
    question: "Is the information security policy reviewed at least annually?",
    domain: "Policy Review",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "An outdated policy may not address current threats or business changes.",
    remediation:
      "Regularly review and update the information security policy to reflect new threats, technological changes, and business objectives.",
  },
  {
    question:
      "Is the policy updated as needed to reflect changes in business objectives or risks?",
    domain: "Policy Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Inflexible policies may become irrelevant or inadequate.",
    remediation:
      "Update the security policy as necessary to align with changing business objectives and risk landscapes.",
  },
  {
    question:
      "Does the security policy define roles and responsibilities for all personnel?",
    domain: "Role Definition",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Ambiguity in roles and responsibilities can lead to security oversights.",
    remediation:
      "Clearly define and document roles and responsibilities related to security within the organization's policy.",
  },
  {
    question:
      "Are all personnel aware of and acknowledge their information security responsibilities?",
    domain: "Security Awareness",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Lack of awareness can result in unintentional non-compliance or security incidents.",
    remediation:
      "Ensure all personnel are aware of and acknowledge their security responsibilities, possibly through training and regular communication.",
  },
  {
    question:
      "Is a formal security awareness program implemented for all personnel?",
    domain: "Training Program",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Without proper awareness, personnel may inadvertently contribute to security breaches.",
    remediation:
      "Implement a formal, ongoing security awareness program for all personnel to educate them on security best practices and threats.",
  },
  {
    question:
      "Is a list of all TPSPs with which account data is shared maintained?",
    domain: "Third-Party Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Lack of tracking can lead to unmanaged risks and data breaches.",
    remediation:
      "Maintain a current list of all third-party service providers (TPSPs) with access to account data, including the nature of their access and services.",
  },
  {
    question: "Are written agreements with TPSPs maintained?",
    domain: "Vendor Agreements",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Absence of formal agreements may lead to unclear data security responsibilities.",
    remediation:
      "Ensure written agreements are in place with all TPSPs, specifying security responsibilities and compliance requirements.",
  },
  {
    question:
      "Do agreements with TPSPs include acknowledgments of their security responsibilities?",
    domain: "Vendor Contracts",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "TPSPs may not be aware of or comply with required security measures.",
    remediation:
      "Include clear clauses in agreements with TPSPs that outline their security responsibilities and requirements for compliance.",
  },
  {
    question: "Is there a process for engaging TPSPs, including due diligence?",
    domain: "TPSP Engagement",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Engaging TPSPs without due diligence can introduce risks.",
    remediation:
      "Develop a formal process for engaging TPSPs, including thorough due diligence to assess their security practices and compliance.",
  },
  {
    question: "Is TPSPs' PCI DSS compliance status monitored annually?",
    domain: "Compliance Monitoring",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Unmonitored TPSPs may not maintain compliance, risking data security.",
    remediation:
      "Monitor the PCI DSS compliance status of TPSPs annually to ensure they continue to meet required security standards.",
  },
  {
    question:
      "Is information about PCI DSS requirements managed by each TPSP maintained?",
    domain: "Compliance Information Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Lack of information can lead to uncertainty about TPSPs’ security practices.",
    remediation:
      "Maintain detailed information about the PCI DSS requirements handled by TPSPs, ensuring clarity on their compliance roles.",
  },
  {
    question:
      "Does an incident response plan exist for suspected or confirmed security incidents?",
    domain: "Incident Response",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Without a response plan, handling incidents can be delayed or ineffective.",
    remediation:
      "Develop and maintain an incident response plan for managing suspected or confirmed security incidents, ensuring prompt and effective actions are taken.",
  },
  {
    question:
      "Are procedures included in the incident response plan for containment and mitigation?",
    domain: "Incident Handling",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Inadequate response procedures can exacerbate the impact of incidents.",
    remediation:
      "Include detailed procedures in the incident response plan for the containment and mitigation of security incidents.",
  },
  {
    question:
      "Does the incident response plan include business recovery and continuity procedures?",
    domain: "Business Continuity",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Failure to plan for business recovery can lead to prolonged downtime and loss.",
    remediation:
      "Incorporate business recovery and continuity procedures into the incident response plan to ensure rapid restoration of operations.",
  },
  {
    question:
      "Are data backup processes included in the incident response plan?",
    domain: "Data Backup",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Lack of backup processes can result in data loss during incidents.",
    remediation:
      "Ensure that the incident response plan includes robust data backup processes to protect against data loss.",
  },
  {
    question: "Is the incident response plan reviewed and tested regularly?",
    domain: "Plan Testing",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "An untested plan may not be effective in a real incident.",
    remediation:
      "Regularly review and test the incident response plan to ensure its effectiveness and make necessary adjustments.",
  },
  {
    question:
      "Are roles, responsibilities, and communication strategies defined in the incident response plan?",
    domain: "Role Definition",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Ambiguity in roles and communication can hinder effective incident response.",
    remediation:
      "Clearly define roles, responsibilities, and communication strategies in the incident response plan for efficient coordination during incidents.",
  },
  {
    question:
      "Is the process for reporting security incidents to payment brands and acquirers included?",
    domain: "Incident Reporting",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Failure to report incidents can result in non-compliance and prolonged impact.",
    remediation:
      "Include a process in the incident response plan for timely reporting of security incidents to relevant payment brands and acquirers.",
  },
  {
    question:
      "Are procedures for legal requirements analysis in case of compromises included?",
    domain: "Legal Compliance",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Non-compliance with legal requirements can lead to penalties and further liabilities.",
    remediation:
      "Incorporate procedures in the incident response plan to analyze and comply with legal requirements in the event of data compromises.",
  },
  {
    question:
      "Are all critical system components covered in the incident response plan?",
    domain: "System Coverage",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Excluding critical components can leave gaps in incident response.",
    remediation:
      "Ensure the incident response plan covers all critical system components, providing comprehensive protection against incidents.",
  },
  {
    question:
      "Are personnel trained on the incident response plan and its activation?",
    domain: "Incident Response Training",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Untrained personnel may not effectively respond to incidents.",
    remediation:
      "Provide comprehensive training to personnel on the incident response plan, including procedures for its activation and execution.",
  },
  {
    question:
      "Are security policies for handling account data clearly communicated to personnel?",
    domain: "Policy Communication",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Personnel unaware of policies may mishandle account data.",
    remediation:
      "Clearly communicate security policies related to handling account data to all relevant personnel, ensuring understanding and compliance.",
  },
  {
    question:
      "Are the security protocols for transmitting account data over networks documented?",
    domain: "Data Transmission Security",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Undocumented transmission protocols can lead to data breaches.",
    remediation:
      "Document and implement secure protocols for transmitting account data over networks, ensuring data is protected during transit.",
  },
  {
    question:
      "Is the process for identifying and managing new security vulnerabilities documented?",
    domain: "Vulnerability Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Failure to manage vulnerabilities can expose systems to risks.",
    remediation:
      "Document and follow a robust process for identifying, assessing, and managing new security vulnerabilities in a timely manner.",
  },
  {
    question:
      "Are procedures for installing security patches and updates documented?",
    domain: "Patch Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Inconsistent patch installation can leave systems vulnerable.",
    remediation:
      "Document and implement procedures for timely installation of security patches and updates to protect against known vulnerabilities.",
  },
  {
    question:
      "Is there a process for assigning unique IDs to each person with computer access?",
    domain: "Access Control",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Without unique IDs, tracking user activities and ensuring accountability is difficult.",
    remediation:
      "Establish a process to assign a unique ID to each individual before granting computer access, ensuring individual accountability.",
  },
  {
    question: "Are group, shared, or generic accounts managed as per policy?",
    domain: "Account Management",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Mismanaged shared accounts can lead to security risks.",
    remediation:
      "Manage group, shared, or generic accounts in accordance with established policies, including monitoring and controlling their use.",
  },
  {
    question:
      "Are procedures in place for granting and revoking access to cardholder data?",
    domain: "Access Control",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Uncontrolled access can result in unauthorized data exposure.",
    remediation:
      "Implement procedures to systematically grant and revoke access to cardholder data, ensuring access is provided based on the principle of least privilege.",
  },
  {
    question:
      "Is user access to system components authenticated via strong authentication factors?",
    domain: "Strong Authentication",
    requirement: "PCI DSS v4",
    issueIfNotCompliant: "Weak authentication can be easily compromised.",
    remediation:
      "Use strong authentication factors to authenticate user access to system components, enhancing security against unauthorized access.",
  },
  {
    question:
      "Are authentication factors rendered unreadable during transmission and storage?",
    domain: "Data Protection",
    requirement: "PCI DSS v4",
    issueIfNotCompliant:
      "Interception or unauthorized access to authentication data can lead to system breaches.",
    remediation:
      "Ensure that all authentication factors are rendered unreadable using strong encryption during transmission and storage to protect against unauthorized access.",
  },
];
