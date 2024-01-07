interface SecurityQuestion {
    question: string;
    domain: string;
    requirement: string;
    issueIfNotCompliant: string;
    remediation: string;
}

export const answersC: SecurityQuestion[] = [
    {
        question: "Do you restrict inbound traffic to the CDE to only necessary traffic, denying all other traffic?",
        domain: "Network Security",
        requirement: "1.2.1",
        issueIfNotCompliant: "Unrestricted inbound traffic can increase vulnerability to attacks.",
        remediation: "Implement firewall rules to restrict inbound traffic to the CDE to only that which is necessary, denying all other traffic."
    },
    {
        question: "Is outbound traffic from the CDE restricted to only necessary traffic?",
        domain: "Network Security",
        requirement: "1.3.4",
        issueIfNotCompliant: "Unrestricted outbound traffic can lead to data leakage and breaches.",
        remediation: "Configure network devices to allow only necessary outbound traffic from the CDE, thereby reducing risk."
    },
    {
        question: "Are all other outbound traffic types specifically denied?",
        domain: "Network Security",
        requirement: "1.3.4",
        issueIfNotCompliant: "Failure to specifically deny certain types of traffic can lead to security vulnerabilities.",
        remediation: "Ensure all non-essential outbound traffic types are explicitly denied to protect the CDE from unauthorized access or data exfiltration."
    },
    {
        question: "Are Network Security Controls (NSCs) installed between all wireless networks and the CDE?",
        domain: "Wireless Network Security",
        requirement: "1.2.3",
        issueIfNotCompliant: "Lack of NSCs can allow unauthorized access to the CDE via wireless networks.",
        remediation: "Install robust NSCs between wireless networks and the CDE to prevent unauthorized access and ensure secure data transmission."
    },
    {
        question: "Is all wireless traffic from wireless networks to the CDE denied by default?",
        domain: "Wireless Network Security",
        requirement: "1.2.3",
        issueIfNotCompliant: "Default allowance of wireless traffic increases the risk of unauthorized access.",
        remediation: "Set up systems to deny all wireless traffic to the CDE by default, allowing only authorized and secure wireless connections."
    },
    {
        question: "Is wireless traffic allowed into the CDE only for authorized business purposes?",
        domain: "Wireless Network Security",
        requirement: "1.2.3",
        issueIfNotCompliant: "Unauthorized wireless access can pose significant security risks.",
        remediation: "Ensure that wireless traffic is permitted into the CDE strictly for authorized business purposes, with stringent security measures in place."
    },
    {
        question: "Are all security policies and operational procedures identified in Requirement 2 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 2",
        issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
        remediation: "Document all security policies and operational procedures related to Requirement 2, ensuring clarity and accessibility for relevant personnel."
    },
    {
        question: "Are these policies and procedures kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 2",
        issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
        remediation: "Regularly review and update security policies and procedures related to Requirement 2 to ensure their relevance and effectiveness."
    },
    {
        question: "Are the policies and procedures in active use?",
        domain: "Policy Implementation",
        requirement: "12.1, 2",
        issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
        remediation: "Ensure that security policies and procedures for Requirement 2 are actively implemented and adhered to within the organization."
    },
    {
        question: "Are all affected parties aware of these policies and procedures?",
        domain: "Policy Awareness",
        requirement: "12.1, 2",
        issueIfNotCompliant: "Lack of awareness can result in non-compliance and security lapses.",
        remediation: "Communicate all relevant policies and procedures to all affected parties, ensuring widespread understanding and compliance."
    },
    {
        question: "Have configuration standards been developed to cover all system components?",
        domain: "System Configuration",
        requirement: "2.2",
        issueIfNotCompliant: "Without configuration standards, systems may be vulnerable to exploitation.",
        remediation: "Develop comprehensive configuration standards for all system components, addressing security vulnerabilities and ensuring secure setup."
    },
    {
        question: "Do these standards address all known security vulnerabilities?",
        domain: "Vulnerability Management",
        requirement: "2.2, 6.1",
        issueIfNotCompliant: "Standards not addressing all vulnerabilities can leave systems exposed.",
        remediation: "Ensure configuration standards address all known security vulnerabilities, keeping them updated as new threats emerge."
    },
    {
        question: "Are the standards consistent with industry-accepted system hardening standards?",
        domain: "System Hardening",
        requirement: "2.2",
        issueIfNotCompliant: "Non-compliance with industry standards can result in inadequate security controls.",
        remediation: "Align configuration standards with industry-accepted system hardening standards to ensure robust security measures."
    },
    {
        question: "Are these standards updated as new vulnerabilities are identified?",
        domain: "Continuous Improvement",
        requirement: "6.2",
        issueIfNotCompliant: "Failure to update standards can lead to persistent vulnerabilities.",
        remediation: "Regularly update configuration standards as new vulnerabilities are identified, ensuring continuous improvement of security measures."
    },
    {
        question: "Are new systems configured and verified according to these standards before connecting to a production environment?",
        domain: "System Implementation",
        requirement: "2.2",
        issueIfNotCompliant: "Systems not configured per standards may introduce security weaknesses.",
        remediation: "Configure and verify new systems according to established standards before their connection to the production environment."
    },
    {
        question: "How are vendor default accounts managed if they will be used?",
        domain: "Account Management",
        requirement: "2.1",
        issueIfNotCompliant: "Default accounts can be easily exploited if not managed properly.",
        remediation: "Change default passwords and implement strict management and monitoring for vendor default accounts if they are to be used."
    },
    {
        question: "How are vendor default accounts managed if they will not be used?",
        domain: "Account Management",
        requirement: "2.1",
        issueIfNotCompliant: "Unused default accounts can become a security risk.",
        remediation: "Disable or remove any vendor default accounts that will not be used to eliminate unnecessary access points into the system."
    },
    {
        question: "How are primary functions requiring different security levels managed on a system component?",
        domain: "System Management",
        requirement: "2.2.3",
        issueIfNotCompliant: "Inadequate management can lead to security breaches.",
        remediation: "Manage primary functions on system components by segregating duties and applying different security levels as needed for risk mitigation."
    },
    {
        question: "Are only necessary services, protocols, daemons, and functions enabled?",
        domain: "Minimal Functionality",
        requirement: "2.2.2",
        issueIfNotCompliant: "Unnecessary services can introduce additional vulnerabilities.",
        remediation: "Disable all unnecessary services, protocols, daemons, and functions to minimize potential attack surfaces."
    },
    {
        question: "Are all unnecessary functionalities removed or disabled?",
        domain: "Secure Configuration",
        requirement: "2.2.2",
        issueIfNotCompliant: "Superfluous functionalities can be exploited by attackers.",
        remediation: "Remove or disable any functionalities not required for the specific purpose of the system to enhance security."
    },
    {
        question: "If insecure services, protocols, or daemons are present, is there documented business justification?",
        domain: "Justification for Use",
        requirement: "2.2.2",
        issueIfNotCompliant: "Use of insecure elements without justification increases risk.",
        remediation: "Document the business justification for using any insecure services, protocols, or daemons, evaluating the necessity and risk."
    },
    {
        question: "Are additional security features implemented for using insecure services, protocols, or daemons?",
        domain: "Compensating Controls",
        requirement: "2.2.2",
        issueIfNotCompliant: "Insecure elements without additional security can be vulnerable.",
        remediation: "Implement compensating security controls when using insecure services, protocols, or daemons to mitigate potential risks."
    },
    {
        question: "How are system security parameters configured to prevent misuse?",
        domain: "System Configuration",
        requirement: "2.2.5",
        issueIfNotCompliant: "Misconfigured parameters can lead to system exploitation.",
        remediation: "Configure system security parameters properly to prevent misuse and unauthorized access, following best practices for security."
    },
    {
        question: "Is all non-console administrative access encrypted using strong cryptography?",
        domain: "Encryption and Access Control",
        requirement: "2.3",
        issueIfNotCompliant: "Unencrypted administrative access can lead to data interception and compromise.",
        remediation: "Encrypt all non-console administrative access using strong cryptographic techniques to ensure secure communications."
    },
    {
        question: "For wireless environments connected to the CDE or transmitting account data, how are wireless vendor defaults managed?",
        domain: "Wireless Security",
        requirement: "2.1.1",
        issueIfNotCompliant: "Default wireless settings can be easily exploited.",
        remediation: "Change all default settings, including passwords and SSIDs, on wireless devices before using them in environments connected to the CDE or transmitting account data."
    },
    {
        question: "How are wireless encryption keys changed for these environments?",
        domain: "Wireless Security",
        requirement: "4.1.1",
        issueIfNotCompliant: "Stagnant encryption keys can be compromised over time.",
        remediation: "Implement a process to regularly change wireless encryption keys, especially after any security incidents or personnel changes."
    },
    {
        question: "Are security policies and procedures identified in Requirement 3 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 3",
        issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
        remediation: "Document all security policies and operational procedures related to Requirement 3, ensuring clarity and accessibility for relevant personnel."
    },
    {
        question: "Are these documents kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 3",
        issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
        remediation: "Regularly review and update security policies and procedures related to Requirement 3 to ensure their relevance and effectiveness."
    },
    {
        question: "Are these policies and procedures in use and known to all affected parties?",
        domain: "Policy Implementation and Awareness",
        requirement: "12.1, 3",
        issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
        remediation: "Ensure that security policies and procedures for Requirement 3 are actively implemented and communicated to all affected parties."
    },
    {
        question: "Is Sensitive Authentication Data (SAD) not retained after authorization?",
        domain: "Data Retention",
        requirement: "3.2",
        issueIfNotCompliant: "Retention of SAD post-authorization is a major security risk.",
        remediation: "Implement measures to ensure that SAD is not stored, processed, or transmitted after transaction authorization."
    },
    {
        question: "How is SAD rendered unrecoverable upon completion of the authorization process?",
        domain: "Data Protection",
        requirement: "3.2",
        issueIfNotCompliant: "Recoverable SAD post-authorization increases the risk of fraud.",
        remediation: "Use secure methods to render SAD completely unrecoverable after the authorization process is completed."
    },
    {
        question: "Is the card verification code not retained upon completion of the authorization process?",
        domain: "Data Retention",
        requirement: "3.2.2",
        issueIfNotCompliant: "Retaining card verification codes post-authorization is a significant security violation.",
        remediation: "Implement strict controls to ensure card verification codes or values are not retained after authorization."
    },
    {
        question: "Is the PIN and the PIN block not retained upon completion of the authorization process?",
        domain: "Data Retention",
        requirement: "3.2.3",
        issueIfNotCompliant: "Storing PINs or PIN blocks post-authorization is highly risky.",
        remediation: "Prohibit the retention of PINs and PIN blocks once the transaction authorization process is completed."
    },
    {
        question: "How is PAN masked when displayed?",
        domain: "PAN Protection",
        requirement: "3.3",
        issueIfNotCompliant: "Unmasked PAN displays increase the risk of unauthorized disclosure.",
        remediation: "Mask PAN when displayed, ensuring that only minimal digits are visible, necessary for business purposes."
    },
    {
        question: "How is strong cryptography and security protocols implemented to safeguard PAN during transmission over open, public networks?",
        domain: "Transmission Security",
        requirement: "4.1",
        issueIfNotCompliant: "PAN transmitted without strong cryptography can be intercepted and compromised.",
        remediation: "Use strong cryptography and secure transmission protocols (like TLS) to protect PAN during transmission over open, public networks."
    },
    {
        question: "Are only trusted keys and certificates accepted for safeguarding PAN during transmission?",
        domain: "Cryptographic Key Management",
        requirement: "4.1",
        issueIfNotCompliant: "Accepting untrusted keys and certificates can compromise transmission security.",
        remediation: "Ensure that only trusted keys and certificates are used for encrypting PAN during transmission to validate authenticity and security."
    },
    {
        question: "Are certificates used to safeguard PAN confirmed as valid and not expired or revoked?",
        domain: "Certificate Management",
        requirement: "4.1",
        issueIfNotCompliant: "Using invalid or expired certificates can lead to security vulnerabilities.",
        remediation: "Regularly check and validate certificates used for PAN encryption to ensure they are current and have not been revoked."
    },
    {
        question: "Does the protocol in use support only secure versions or configurations?",
        domain: "Secure Protocols",
        requirement: "4.1",
        issueIfNotCompliant: "Insecure or outdated protocol versions increase the risk of data breaches.",
        remediation: "Use only secure and up-to-date versions of transmission protocols, ensuring they are configured for maximum security."
    },
    {
        question: "How is the encryption strength ensured to be appropriate for the encryption methodology in use?",
        domain: "Encryption Strength",
        requirement: "4.1",
        issueIfNotCompliant: "Inadequate encryption strength can be easily breached.",
        remediation: "Ensure that the encryption strength is appropriate and aligned with the encryption methodology employed, following current best practices."
    },
    {
        question: "Do wireless networks transmitting PAN or connected to the CDE use strong cryptography for authentication and transmission?",
        domain: "Wireless Network Security",
        requirement: "4.1",
        issueIfNotCompliant: "Weak cryptography in wireless networks can be exploited.",
        remediation: "Implement strong cryptographic techniques for both authentication and transmission of PAN over wireless networks."
    },
    {
        question: "Is PAN secured with strong cryptography when sent via end-user messaging technologies?",
        domain: "Data Transmission",
        requirement: "4.2",
        issueIfNotCompliant: "Sending PAN via unsecured messaging technologies can lead to data interception.",
        remediation: "Ensure that PAN is encrypted with strong cryptography when sent using end-user messaging technologies, protecting it from unauthorized access."
    },
    {
        question: "Are all security policies and operational procedures identified in Requirement 5 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 5",
        issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
        remediation: "Document all security policies and operational procedures related to Requirement 5, ensuring clarity and accessibility for relevant personnel."
    },
    {
        question: "Are these documents kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 5",
        issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
        remediation: "Regularly review and update security policies and procedures related to Requirement 5 to ensure their relevance and effectiveness."
    },
    {
        question: "Are these policies and procedures in use and known to all affected parties?",
        domain: "Policy Implementation and Awareness",
        requirement: "12.1, 5",
        issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
        remediation: "Ensure that security policies and procedures for Requirement 5 are actively implemented and communicated to all affected parties."
    },
    {
        question: "Is an anti-malware solution deployed on all system components?",
        domain: "Malware Protection",
        requirement: "5.1",
        issueIfNotCompliant: "Absence of anti-malware solutions can leave systems vulnerable to malware attacks.",
        remediation: "Deploy an effective anti-malware solution on all system components, particularly those susceptible to malware."
    },
    {
        question: "Does the anti-malware solution detect all known types of malware?",
        domain: "Malware Protection",
        requirement: "5.1.2",
        issueIfNotCompliant: "Inadequate malware detection can lead to system compromise.",
        remediation: "Ensure the anti-malware solution is capable of detecting all known types of malware, keeping it updated to recognize new malware variants."
    },
    {
        question: "Does it remove, block, or contain all known types of malware?",
        domain: "Malware Mitigation",
        requirement: "5.1.2",
        issueIfNotCompliant: "Failure to effectively remove, block, or contain malware can result in system infections and data breaches.",
        remediation: "Configure the anti-malware solution to not only detect but also effectively remove, block, or contain any identified malware."
    },
    {
        question: "For system components not at risk for malware, how are they evaluated periodically?",
        domain: "Risk Assessment",
        requirement: "5.1.2",
        issueIfNotCompliant: "Overlooking malware risks on certain components can lead to security oversights.",
        remediation: "Periodically evaluate all system components, even those believed to be not at risk for malware, to reassess their risk profile and need for malware protection."
    },
    {
        question: "What is the frequency of periodic evaluations for these system components?",
        domain: "Regular Assessments",
        requirement: "5.1.2",
        issueIfNotCompliant: "Infrequent evaluations may miss emerging malware threats.",
        remediation: "Establish a frequency for periodic evaluations of all system components to ensure ongoing assessment and response to evolving malware risks."
    },
    {
        question: "Is the anti-malware solution kept current via automatic updates?",
        domain: "Malware Protection",
        requirement: "5.2",
        issueIfNotCompliant: "Out-of-date anti-malware solutions may not effectively protect against new malware.",
        remediation: "Set up automatic updates for the anti-malware solution to ensure it remains current and effective against the latest malware threats."
    },
    {
        question: "How does the anti-malware solution perform periodic and active or real-time scans?",
        domain: "Malware Protection",
        requirement: "5.1",
        issueIfNotCompliant: "Inadequate scanning can leave malware undetected.",
        remediation: "Ensure the anti-malware solution performs both periodic and real-time scans to actively detect and respond to malware threats."
    },
    {
        question: "If periodic malware scans are performed, what is their frequency?",
        domain: "Malware Scanning",
        requirement: "5.1",
        issueIfNotCompliant: "Infrequent scans may not catch malware promptly.",
        remediation: "Conduct periodic malware scans at a frequency sufficient to identify and mitigate risks, typically daily or more frequently."
    },
    {
        question: "For removable electronic media, how does the anti-malware solution perform scans?",
        domain: "Media Security",
        requirement: "5.1",
        issueIfNotCompliant: "Unscanned media can introduce malware.",
        remediation: "Implement procedures to scan removable electronic media for malware upon insertion or connection to system components."
    },
    {
        question: "Are audit logs for the anti-malware solution enabled and retained according to Requirement 10.5.1?",
        domain: "Audit Logging",
        requirement: "10.5.1",
        issueIfNotCompliant: "Without logs, tracking and analyzing malware incidents is challenging.",
        remediation: "Ensure that audit logs for the anti-malware solution are enabled, properly maintained, and retained according to PCI DSS requirements."
    },
    {
        question: "Can anti-malware mechanisms be disabled or altered by users?",
        domain: "Malware Protection",
        requirement: "5.3",
        issueIfNotCompliant: "User alterations can compromise malware defenses.",
        remediation: "Configure anti-malware mechanisms to prevent disabling or alteration by users unless specifically authorized."
    },
    {
        question: "Are processes and automated mechanisms in place to detect and protect against phishing attacks?",
        domain: "Phishing Protection",
        requirement: "5.1, 5.2",
        issueIfNotCompliant: "Vulnerability to phishing attacks can lead to data breaches.",
        remediation: "Implement processes and automated mechanisms, like email filtering and user training, to detect and protect against phishing attacks."
    },
    {
        question: "Are bespoke and custom software developed securely based on industry standards or best practices?",
        domain: "Software Development",
        requirement: "6.3, 6.5",
        issueIfNotCompliant: "Insecure software can introduce significant risks.",
        remediation: "Develop bespoke and custom software securely, adhering to industry standards or best practices for secure coding."
    },
    {
        question: "Are software development personnel trained on software security relevant to their job function?",
        domain: "Developer Training",
        requirement: "6.5",
        issueIfNotCompliant: "Lack of training can lead to security vulnerabilities in software.",
        remediation: "Provide relevant training on software security to development personnel, tailored to their specific job functions."
    },
    {
        question: "If manual code reviews are performed for bespoke and custom software, how are they managed?",
        domain: "Code Review",
        requirement: "6.3.2",
        issueIfNotCompliant: "Poorly managed code reviews can miss critical vulnerabilities.",
        remediation: "Implement a structured process for manual code reviews, ensuring thorough examination for security vulnerabilities."
    },
    {
        question: "Are software engineering techniques or other methods used to prevent or mitigate common software attacks?",
        domain: "Software Engineering",
        requirement: "6.5",
        issueIfNotCompliant: "Software may be vulnerable to common attack vectors.",
        remediation: "Use robust software engineering techniques or methods, such as input validation and error handling, to prevent common software attacks."
    },
    {
        question: "How are security vulnerabilities identified and managed?",
        domain: "Vulnerability Management",
        requirement: "6.1, 6.2",
        issueIfNotCompliant: "Unmanaged vulnerabilities can lead to system exploitation.",
        remediation: "Establish a process for identifying, assessing, and managing security vulnerabilities in a timely manner."
    },
    {
        question: "Are new security vulnerabilities identified using industry-recognized sources?",
        domain: "Vulnerability Identification",
        requirement: "6.1",
        issueIfNotCompliant: "Failure to identify new vulnerabilities can leave systems unprotected.",
        remediation: "Regularly consult industry-recognized sources to stay updated on new security vulnerabilities."
    },
    {
        question: "How are vulnerabilities assigned a risk ranking?",
        domain: "Risk Assessment",
        requirement: "6.1",
        issueIfNotCompliant: "Without risk ranking, it's challenging to prioritize remediation efforts.",
        remediation: "Assign a risk ranking to each identified vulnerability to prioritize mitigation efforts based on the level of risk."
    },
    {
        question: "Are vulnerabilities for bespoke and custom, and third-party software covered?",
        domain: "Software Vulnerability Management",
        requirement: "6.2",
        issueIfNotCompliant: "Neglecting software vulnerabilities can result in breaches.",
        remediation: "Include both bespoke/custom and third-party software in your vulnerability management process to ensure comprehensive coverage."
    },
    {
        question: "How are system components protected from known vulnerabilities?",
        domain: "System Protection",
        requirement: "6.2",
        issueIfNotCompliant: "Unprotected systems are at risk of exploitation.",
        remediation: "Implement measures to protect system components from known vulnerabilities, including regular patching and updates."
    },
    {
        question: "How are critical or high-security patches/updates installed?",
        domain: "Patch Management",
        requirement: "6.2",
        issueIfNotCompliant: "Delayed installation of critical patches can leave systems vulnerable.",
        remediation: "Establish a process to quickly install critical or high-security patches/updates, ideally within a month of release."
    },
    {
        question: "Are changes to system components in the production environment made according to established procedures?",
        domain: "Change Management",
        requirement: "6.4",
        issueIfNotCompliant: "Uncontrolled changes can introduce security issues.",
        remediation: "Ensure all changes to system components in the production environment follow established change management procedures."
    },
    {
        question: "How is the security impact of changes documented?",
        domain: "Change Documentation",
        requirement: "6.4",
        issueIfNotCompliant: "Undocumented changes can lead to unassessed security risks.",
        remediation: "Document the security impact of each change, assessing potential risks and necessary controls."
    },
    {
        question: "Are changes tested to verify that they do not adversely impact system security?",
        domain: "Change Testing",
        requirement: "6.4",
        issueIfNotCompliant: "Unverified changes can compromise system security.",
        remediation: "Test all changes to verify they do not adversely impact system security before implementing them in the production environment."
    },
    {
        question: "How are failures addressed to return to a secure state?",
        domain: "Incident Management",
        requirement: "6.5, 12.10",
        issueIfNotCompliant: "Inadequate response to failures can prolong security risks.",
        remediation: "Implement a process to quickly address failures and return systems to a secure state, including rollback procedures and incident response."
    },
    {
        question: "Upon completion of a significant change, are all applicable PCI DSS requirements confirmed to be in place?",
        domain: "Compliance Post-Change",
        requirement: "6.4",
        issueIfNotCompliant: "Post-change environments may not meet compliance requirements.",
        remediation: "Conduct a review after significant changes to confirm that all applicable PCI DSS requirements remain in place and are fully operational."
    },
    {
        question: "How is access assigned to users based on job classification and function?",
        domain: "Access Control",
        requirement: "7.1.1, 7.1.2",
        issueIfNotCompliant: "Inappropriate access levels can lead to data exposure.",
        remediation: "Assign access to users based on their job classification and function, ensuring access levels are appropriate and adhere to the principle of least privilege."
    },
    {
        question: "Are required privileges approved by authorized personnel?",
        domain: "Privilege Management",
        requirement: "7.1.2",
        issueIfNotCompliant: "Unapproved privileges can create security vulnerabilities.",
        remediation: "Implement a process where required privileges are approved by authorized personnel, ensuring oversight and control of access rights."
    },
    {
        question: "How are user accounts and related access privileges reviewed?",
        domain: "Account Review",
        requirement: "7.1.3",
        issueIfNotCompliant: "Unreviewed accounts may retain inappropriate access rights.",
        remediation: "Regularly review user accounts and their access privileges to ensure they are appropriate and necessary for current job responsibilities."
    },
    {
        question: "How are application and system accounts and related access privileges assigned and managed?",
        domain: "Account Management",
        requirement: "7.1",
        issueIfNotCompliant: "Mismanaged accounts can pose a risk to system security.",
        remediation: "Implement a robust process for assigning and managing application and system accounts, ensuring access privileges are controlled and monitored."
    },
    {
        question: "Are all security policies and operational procedures identified in Requirement 8 documented?",
        domain: "Policy Documentation",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
        remediation: "Document all security policies and operational procedures related to Requirement 8, ensuring clarity and accessibility for relevant personnel."
    },
    {
        question: "Are these documents kept up to date?",
        domain: "Policy Management",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
        remediation: "Regularly review and update security policies and procedures related to Requirement 8 to ensure their relevance and effectiveness."
    },
    {
        question: "Are these policies and procedures in use and known to all affected parties?",
        domain: "Policy Implementation and Awareness",
        requirement: "12.1, 8",
        issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
        remediation: "Ensure that security policies and procedures for Requirement 8 are actively implemented and communicated to all affected parties."
    },
    {
        question: "Are all users assigned a unique ID before access to system components or cardholder data is allowed?",
        domain: "User Identification",
        requirement: "8.1",
        issueIfNotCompliant: "Without unique IDs, tracking user activities and ensuring accountability is difficult.",
        remediation: "Assign a unique ID to each user before granting them access to system components or cardholder data to ensure individual accountability."
    },
    {
        question: "How are group, shared, or generic accounts, or other shared authentication credentials managed?",
        domain: "Account Management",
        requirement: "8.2",
        issueIfNotCompliant: "Shared accounts can lead to accountability issues and security risks.",
        remediation: "Implement strict controls and monitoring for the use of group, shared, or generic accounts to maintain security and accountability."
    },
    {
        question: "How is the addition, deletion, and modification of user IDs, authentication factors, and other identifier objects managed?",
        domain: "Identity Management",
        requirement: "8.1",
        issueIfNotCompliant: "Poorly managed IDs and authentication factors can compromise security.",
        remediation: "Establish a managed process for adding, deleting, and modifying user IDs and authentication factors to ensure secure and controlled access."
    },
    {
        question: "Is access for terminated users immediately revoked?",
        domain: "Account Termination",
        requirement: "8.1.3",
        issueIfNotCompliant: "Delay in revoking access for terminated users increases security risks.",
        remediation: "Implement a process to immediately revoke system access for users upon their termination to prevent unauthorized access."
    },
    {
        question: "Are inactive user accounts removed or disabled within 90 days of inactivity?",
        domain: "Account Management",
        requirement: "8.1.4",
        issueIfNotCompliant: "Inactive accounts can be a target for unauthorized use.",
        remediation: "Regularly review user accounts and disable or remove those that have been inactive for more than 90 days."
    },
    {
        question: "How are accounts used by third parties for remote access managed?",
        domain: "Third-Party Access Management",
        requirement: "8.1.5",
        issueIfNotCompliant: "Improperly managed third-party access can lead to data breaches.",
        remediation: "Manage and monitor third-party remote access accounts rigorously, enabling them only when required and with appropriate controls."
    },
    {
        question: "Is re-authentication required if a user session has been idle for more than 15 minutes?",
        domain: "Session Management",
        requirement: "8.1.8",
        issueIfNotCompliant: "Sessions left open can be hijacked or misused.",
        remediation: "Implement a timeout feature that requires re-authentication after a user session has been idle for more than 15 minutes."
    },
    {
        question: "How is all user access to system components authenticated?",
        domain: "Access Authentication",
        requirement: "8.2",
        issueIfNotCompliant: "Unauthenticated access can lead to unauthorized data access.",
        remediation: "Ensure that all user access to system components is authenticated using strong authentication methods to secure access."
    },
    {
        question: "Is strong cryptography used to render all authentication factors unreadable during transmission and storage?",
        domain: "Data Protection",
        requirement: "8.2.1",
        issueIfNotCompliant: "Unencrypted authentication data can be intercepted and compromised.",
        remediation: "Use strong cryptography to protect all authentication factors, rendering them unreadable during transmission and storage."
    },
    {
        question: "How is user identity verified before modifying any authentication factor?",
        domain: "Identity Verification",
        requirement: "8.2.4",
        issueIfNotCompliant: "Without verification, unauthorized individuals could alter authentication factors.",
        remediation: "Implement strict procedures to verify the identity of users before allowing modifications to their authentication factors."
    },
    {
        question: "How are invalid authentication attempts limited?",
        domain: "Access Control",
        requirement: "8.3.1",
        issueIfNotCompliant: "Unlimited authentication attempts can lead to brute force attacks.",
        remediation: "Limit invalid login attempts by locking out user accounts after a set number of failed attempts to prevent brute force attacks."
    },
    {
    question: "How are passwords/passphrases set and reset for each user?",
    domain: "Password Management",
    requirement: "8.2.3",
    issueIfNotCompliant: "Insecure password practices can compromise account security.",
    remediation: "Implement secure processes for setting and resetting passwords/passphrases, ensuring they meet complexity and security requirements."
  },
  {
    question: "Do passwords/passphrases meet the minimum level of complexity?",
    domain: "Password Complexity",
    requirement: "8.2.3",
    issueIfNotCompliant: "Simple passwords are easy to guess or crack.",
    remediation: "Enforce a minimum level of complexity for passwords/passphrases to enhance security against brute force and guessing attacks."
  },
  {
    question: "Are individuals allowed to submit a new password/passphrase that is the same as any of the last four used?",
    domain: "Password History",
    requirement: "8.2.4",
    issueIfNotCompliant: "Reusing old passwords can reduce security effectiveness.",
    remediation: "Prevent users from reusing their last four passwords/passphrases to ensure continual password freshness and strength."
  },
  {
    question: "Are authentication policies and procedures documented and communicated to all users?",
    domain: "Policy Communication",
    requirement: "12.1, 8",
    issueIfNotCompliant: "Users unaware of authentication policies may not follow best practices.",
    remediation: "Document and communicate authentication policies and procedures to all users, ensuring clarity and understanding."
  },
  {
    question: "How are passwords/passphrases managed for single-factor authentication?",
    domain: "Single-Factor Authentication",
    requirement: "8.2.5",
    issueIfNotCompliant: "Weak management can compromise the effectiveness of single-factor authentication.",
    remediation: "Implement robust management practices for passwords/passphrases used in single-factor authentication, including regular changes and complexity requirements."
  },
  {
    question: "Is Multi-Factor Authentication (MFA) implemented for all non-console access into the CDE for personnel with administrative access?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant: "Lack of MFA for administrative access can increase the risk of unauthorized entry.",
    remediation: "Implement MFA for all non-console access into the CDE, especially for personnel with administrative privileges, to enhance security."
  },
  {
    question: "Is MFA implemented for all access into the CDE?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant: "Single-factor authentication may not sufficiently protect against unauthorized access.",
    remediation: "Use MFA for all access to the CDE, providing an additional layer of security beyond just a username and password."
  },
  {
    question: "Is MFA implemented for all remote network access originating from outside the entity’s network?",
    domain: "Remote Access Security",
    requirement: "8.3.2",
    issueIfNotCompliant: "Remote access without MFA is vulnerable to compromise.",
    remediation: "Require MFA for all remote network access originating from outside the entity's network to prevent unauthorized access."
  },
  {
    question: "How are MFA systems implemented to ensure security?",
    domain: "MFA Implementation",
    requirement: "8.3",
    issueIfNotCompliant: "Poorly implemented MFA systems can be bypassed or exploited.",
    remediation: "Ensure that MFA systems are securely implemented, using reliable methods and technologies to authenticate users effectively."
  },
  {
    question: "How are accounts used by systems or applications for interactive login managed?",
    domain: "System/Application Account Management",
    requirement: "8.5",
    issueIfNotCompliant: "Mismanaged accounts can pose a risk to system security.",
    remediation: "Manage system or application accounts used for interactive logins with strict controls, ensuring they are secure and used appropriately."
  },
  {
    question: "Are passwords/passphrases for application and system accounts hard coded in scripts or source code?",
    domain: "Password Management",
    requirement: "8.4",
    issueIfNotCompliant: "Hard-coded credentials in scripts or code can be a significant security vulnerability.",
    remediation: "Avoid hard coding passwords/passphrases in scripts or source code. Use secure methods like encrypted key stores for managing such credentials."
  },
  {
    question: "How are passwords/passphrases for application and system accounts protected against misuse?",
    domain: "Password Management",
    requirement: "8.2",
    issueIfNotCompliant: "Poorly protected passwords can lead to unauthorized access.",
    remediation: "Implement robust security measures such as encryption, secure storage, and regular updates to protect passwords from misuse."
  },
  {
    question: "Are all security policies and operational procedures identified in Requirement 9 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
    remediation: "Document all security policies and operational procedures related to Requirement 9, ensuring clarity and accessibility for relevant personnel."
  },
  {
    question: "Are these documents kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
    remediation: "Regularly review and update security policies and procedures related to Requirement 9 to ensure their relevance and effectiveness."
  },
  {
    question: "Are these policies and procedures in use and known to all affected parties?",
    domain: "Policy Implementation and Awareness",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
    remediation: "Ensure that security policies and procedures for Requirement 9 are actively implemented and communicated to all affected parties."
  },
  {
    question: "Are appropriate facility entry controls in place to restrict physical access to systems in the CDE?",
    domain: "Physical Access Control",
    requirement: "9.1",
    issueIfNotCompliant: "Inadequate entry controls can lead to unauthorized physical access.",
    remediation: "Implement effective facility entry controls, such as key cards or biometrics, to restrict physical access to systems within the CDE."
  },
  {
    question: "How is individual physical access to sensitive areas within the CDE monitored?",
    domain: "Physical Access Monitoring",
    requirement: "9.1",
    issueIfNotCompliant: "Unmonitored access can result in security breaches.",
    remediation: "Monitor individual physical access to sensitive areas within the CDE using methods like access logs or video surveillance."
  },
  {
    question: "Are physical and/or logical controls implemented to restrict use of publicly accessible network jacks?",
    domain: "Network Security",
    requirement: "9.1.2",
    issueIfNotCompliant: "Unrestricted network jacks can be exploited for unauthorized access.",
    remediation: "Implement physical and/or logical controls to restrict the use of publicly accessible network jacks to prevent unauthorized network access."
  },
  {
    question: "How is all media with cardholder data physically secured?",
    domain: "Media Protection",
    requirement: "9.5",
    issueIfNotCompliant: "Unsecured media can be easily accessed or stolen.",
    remediation: "Secure all media containing cardholder data in locked and access-controlled storage areas to prevent unauthorized access."
  },
  {
    question: "How are offline media backups with cardholder data stored?",
    domain: "Media Backups",
    requirement: "9.5",
    issueIfNotCompliant: "Insecurely stored backups can be a target for theft or unauthorized access.",
    remediation: "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats."
  },
  {
    question: "How is media with cardholder data classified?",
    domain: "Media Classification",
    requirement: "9.6.1",
    issueIfNotCompliant: "Without classification, media may not receive the appropriate level of protection.",
    remediation: "Classify media containing cardholder data based on sensitivity, ensuring that higher sensitivity media receives stronger protection measures."
  },
  {
    question: "How is media with cardholder data secured when sent outside the facility?",
    domain: "Media Transport",
    requirement: "9.6",
    issueIfNotCompliant: "Media transported without adequate security measures can be compromised.",
    remediation: "Implement strict security protocols for the external transport of media, including encryption and secure containers, to protect cardholder data."
  },
  {
    question: "How does management approve media with cardholder data moved outside the facility?",
    domain: "Data Movement",
    requirement: "9.6",
    issueIfNotCompliant: "Unapproved data movement can lead to data loss or exposure.",
    remediation: "Require management approval for any movement of media with cardholder data outside the facility, ensuring oversight and accountability."
  },
  {
    question: "How are hard-copy materials with cardholder data destroyed when no longer needed?",
    domain: "Data Destruction",
    requirement: "9.8.2",
    issueIfNotCompliant: "Improperly destroyed materials can lead to data recovery and misuse.",
    remediation: "Employ secure destruction methods for hard-copy materials containing cardholder data, such as cross-cut shredding or incineration, to ensure data is unrecoverable."
  },
  {
    question: "How are POI devices protected from tampering and unauthorized substitution?",
    domain: "Physical Security",
    requirement: "9.9",
    issueIfNotCompliant: "Tampered POI devices can lead to data breaches.",
    remediation: "Implement measures to protect Point of Interaction (POI) devices from tampering and substitution, including physical security controls and regular inspections."
  },
  {
    question: "How is an up-to-date list of POI devices maintained?",
    domain: "Inventory Management",
    requirement: "9.9.1",
    issueIfNotCompliant: "Lack of inventory control can result in unmanaged devices.",
    remediation: "Maintain a current inventory of all POI devices, including their location and unique identifier, to track and manage them effectively."
  },
  {
    question: "How are POI device surfaces periodically inspected for tampering?",
    domain: "Physical Security",
    requirement: "9.9.2",
    issueIfNotCompliant: "Undetected tampering can compromise data security.",
    remediation: "Regularly inspect the surfaces of POI devices for tampering, looking for signs like skimming devices or unusual attachments."
  },
  {
    question: "What training is provided to personnel in POI environments?",
    domain: "Training and Awareness",
    requirement: "9.9.3",
    issueIfNotCompliant: "Lack of awareness can lead to missed signs of device tampering.",
    remediation: "Provide training to staff on recognizing signs of POI device tampering and the proper actions to take if tampering is suspected."
  },
  {
    question: "Are all security policies and operational procedures identified in Requirement 10 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
    remediation: "Document all security policies and operational procedures related to Requirement 10, ensuring clarity and accessibility for relevant personnel."
  },
  {
    question: "Are these documents kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
    remediation: "Regularly review and update security policies and procedures related to Requirement 10 to ensure their relevance and effectiveness."
  },
  {
    question: "Are these policies and procedures in use and known to all affected parties?",
    domain: "Policy Implementation and Awareness",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
    remediation: "Ensure that security policies and procedures for Requirement 10 are actively implemented and communicated to all affected parties."
  },
  {
    question: "How are audit logs captured for actions taken by individuals with administrative access?",
    domain: "Audit Logging",
    requirement: "10.2",
    issueIfNotCompliant: "Without proper logging, tracking administrative actions is challenging.",
    remediation: "Implement audit logging mechanisms to capture all actions taken by individuals with administrative access, ensuring accountability."
  },
  {
    question: "Are all invalid logical access attempts captured in audit logs?",
    domain: "Audit Logging",
    requirement: "10.2.4",
    issueIfNotCompliant: "Not logging invalid access attempts can miss potential security incidents.",
    remediation: "Ensure that all invalid logical access attempts are captured in audit logs to detect and investigate unauthorized access attempts."
  },
  {
    question: "Are all changes to identification and authentication credentials captured in audit logs?",
    domain: "Audit Logging",
    requirement: "10.2.5",
    issueIfNotCompliant: "Unlogged changes to credentials can lead to security vulnerabilities.",
    remediation: "Capture all changes to identification and authentication credentials in audit logs for monitoring and review."
  },
  {
    question: "What details are recorded in audit logs for each auditable event?",
    domain: "Audit Log Content",
    requirement: "10.3",
    issueIfNotCompliant: "Incomplete logs may not provide sufficient information for analysis.",
    remediation: "Record detailed information in audit logs for each event, including user identification, event type, success or failure indication, and timestamp."
  },
  {
    question: "How are passwords/passphrases set and reset for each user?",
    domain: "Password Management",
    requirement: "8.2.3",
    issueIfNotCompliant: "Insecure password practices can compromise account security.",
    remediation: "Implement secure processes for setting and resetting passwords/passphrases, ensuring they meet complexity and security requirements."
  },
  {
    question: "Do passwords/passphrases meet the minimum level of complexity?",
    domain: "Password Complexity",
    requirement: "8.2.3",
    issueIfNotCompliant: "Simple passwords are easy to guess or crack.",
    remediation: "Enforce a minimum level of complexity for passwords/passphrases to enhance security against brute force and guessing attacks."
  },
  {
    question: "Are individuals allowed to submit a new password/passphrase that is the same as any of the last four used?",
    domain: "Password History",
    requirement: "8.2.4",
    issueIfNotCompliant: "Reusing old passwords can reduce security effectiveness.",
    remediation: "Prevent users from reusing their last four passwords/passphrases to ensure continual password freshness and strength."
  },
  {
    question: "Are authentication policies and procedures documented and communicated to all users?",
    domain: "Policy Communication",
    requirement: "12.1, 8",
    issueIfNotCompliant: "Users unaware of authentication policies may not follow best practices.",
    remediation: "Document and communicate authentication policies and procedures to all users, ensuring clarity and understanding."
  },
  {
    question: "How are passwords/passphrases managed for single-factor authentication?",
    domain: "Single-Factor Authentication",
    requirement: "8.2.5",
    issueIfNotCompliant: "Weak management can compromise the effectiveness of single-factor authentication.",
    remediation: "Implement robust management practices for passwords/passphrases used in single-factor authentication, including regular changes and complexity requirements."
  },
  {
    question: "Is Multi-Factor Authentication (MFA) implemented for all non-console access into the CDE for personnel with administrative access?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant: "Lack of MFA for administrative access can increase the risk of unauthorized entry.",
    remediation: "Implement MFA for all non-console access into the CDE, especially for personnel with administrative privileges, to enhance security."
  },
  {
    question: "Is MFA implemented for all access into the CDE?",
    domain: "Multi-Factor Authentication",
    requirement: "8.3",
    issueIfNotCompliant: "Single-factor authentication may not sufficiently protect against unauthorized access.",
    remediation: "Use MFA for all access to the CDE, providing an additional layer of security beyond just a username and password."
  },
  {
    question: "Is MFA implemented for all remote network access originating from outside the entity’s network?",
    domain: "Remote Access Security",
    requirement: "8.3.2",
    issueIfNotCompliant: "Remote access without MFA is vulnerable to compromise.",
    remediation: "Require MFA for all remote network access originating from outside the entity's network to prevent unauthorized access."
  },
  {
    question: "How are MFA systems implemented to ensure security?",
    domain: "MFA Implementation",
    requirement: "8.3",
    issueIfNotCompliant: "Poorly implemented MFA systems can be bypassed or exploited.",
    remediation: "Ensure that MFA systems are securely implemented, using reliable methods and technologies to authenticate users effectively."
  },
  {
    question: "How are accounts used by systems or applications for interactive login managed?",
    domain: "System/Application Account Management",
    requirement: "8.5",
    issueIfNotCompliant: "Mismanaged accounts can pose a risk to system security.",
    remediation: "Manage system or application accounts used for interactive logins with strict controls, ensuring they are secure and used appropriately."
  },
  {
    question: "Are passwords/passphrases for application and system accounts hard coded in scripts or source code?",
    domain: "Password Management",
    requirement: "8.4",
    issueIfNotCompliant: "Hard-coded credentials in scripts or code can be a significant security vulnerability.",
    remediation: "Avoid hard coding passwords/passphrases in scripts or source code. Use secure methods like encrypted key stores for managing such credentials."
  },
  {
    question: "How are passwords/passphrases for application and system accounts protected against misuse?",
    domain: "Password Management",
    requirement: "8.2",
    issueIfNotCompliant: "Poorly protected passwords can lead to unauthorized access.",
    remediation: "Implement robust security measures such as encryption, secure storage, and regular updates to protect passwords from misuse."
  },
  {
    question: "Are all security policies and operational procedures identified in Requirement 9 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
    remediation: "Document all security policies and operational procedures related to Requirement 9, ensuring clarity and accessibility for relevant personnel."
  },
  {
    question: "Are these documents kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
    remediation: "Regularly review and update security policies and procedures related to Requirement 9 to ensure their relevance and effectiveness."
  },
  {
    question: "Are these policies and procedures in use and known to all affected parties?",
    domain: "Policy Implementation and Awareness",
    requirement: "12.1, 9",
    issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
    remediation: "Ensure that security policies and procedures for Requirement 9 are actively implemented and communicated to all affected parties."
  },
  {
    question: "Are appropriate facility entry controls in place to restrict physical access to systems in the CDE?",
    domain: "Physical Access Control",
    requirement: "9.1",
    issueIfNotCompliant: "Inadequate entry controls can lead to unauthorized physical access.",
    remediation: "Implement effective facility entry controls, such as key cards or biometrics, to restrict physical access to systems within the CDE."
  },
  {
    question: "How is individual physical access to sensitive areas within the CDE monitored?",
    domain: "Physical Access Monitoring",
    requirement: "9.1",
    issueIfNotCompliant: "Unmonitored access can result in security breaches.",
    remediation: "Monitor individual physical access to sensitive areas within the CDE using methods like access logs or video surveillance."
  },
  {
    question: "Are physical and/or logical controls implemented to restrict use of publicly accessible network jacks?",
    domain: "Network Security",
    requirement: "9.1.2",
    issueIfNotCompliant: "Unrestricted network jacks can be exploited for unauthorized access.",
    remediation: "Implement physical and/or logical controls to restrict the use of publicly accessible network jacks to prevent unauthorized network access."
  },
  {
    question: "How is all media with cardholder data physically secured?",
    domain: "Media Protection",
    requirement: "9.5",
    issueIfNotCompliant: "Unsecured media can be easily accessed or stolen.",
    remediation: "Secure all media containing cardholder data in locked and access-controlled storage areas to prevent unauthorized access."
  },
  {
    question: "How are offline media backups with cardholder data stored?",
    domain: "Media Backups",
    requirement: "9.5",
    issueIfNotCompliant: "Insecurely stored backups can be a target for theft or unauthorized access.",
    remediation: "Store offline media backups containing cardholder data in secure, access-controlled locations to protect against unauthorized access and physical threats."
  },
  {
    question: "How is media with cardholder data classified?",
    domain: "Media Classification",
    requirement: "9.6.1",
    issueIfNotCompliant: "Without classification, media may not receive the appropriate level of protection.",
    remediation: "Classify media containing cardholder data based on sensitivity, ensuring that higher sensitivity media receives stronger protection measures."
  },
  {
    question: "How is media with cardholder data secured when sent outside the facility?",
    domain: "Media Transport",
    requirement: "9.6",
    issueIfNotCompliant: "Media transported without adequate security measures can be compromised.",
    remediation: "Implement strict security protocols for the external transport of media, including encryption and secure containers, to protect cardholder data."
  },
  {
    question: "How does management approve media with cardholder data moved outside the facility?",
    domain: "Data Movement",
    requirement: "9.6",
    issueIfNotCompliant: "Unapproved data movement can lead to data loss or exposure.",
    remediation: "Require management approval for any movement of media with cardholder data outside the facility, ensuring oversight and accountability."
  },
  {
    question: "How are hard-copy materials with cardholder data destroyed when no longer needed?",
    domain: "Data Destruction",
    requirement: "9.8.2",
    issueIfNotCompliant: "Improperly destroyed materials can lead to data recovery and misuse.",
    remediation: "Employ secure destruction methods for hard-copy materials containing cardholder data, such as cross-cut shredding or incineration, to ensure data is unrecoverable."
  },
  {
    question: "How are POI devices protected from tampering and unauthorized substitution?",
    domain: "Physical Security",
    requirement: "9.9",
    issueIfNotCompliant: "Tampered POI devices can lead to data breaches.",
    remediation: "Implement measures to protect Point of Interaction (POI) devices from tampering and substitution, including physical security controls and regular inspections."
  },
  {
    question: "How is an up-to-date list of POI devices maintained?",
    domain: "Inventory Management",
    requirement: "9.9.1",
    issueIfNotCompliant: "Lack of inventory control can result in unmanaged devices.",
    remediation: "Maintain a current inventory of all POI devices, including their location and unique identifier, to track and manage them effectively."
  },
  {
    question: "How are POI device surfaces periodically inspected for tampering?",
    domain: "Physical Security",
    requirement: "9.9.2",
    issueIfNotCompliant: "Undetected tampering can compromise data security.",
    remediation: "Regularly inspect the surfaces of POI devices for tampering, looking for signs like skimming devices or unusual attachments."
  },
  {
    question: "What training is provided to personnel in POI environments?",
    domain: "Training and Awareness",
    requirement: "9.9.3",
    issueIfNotCompliant: "Lack of awareness can lead to missed signs of device tampering.",
    remediation: "Provide training to staff on recognizing signs of POI device tampering and the proper actions to take if tampering is suspected."
  },
  {
    question: "Are all security policies and operational procedures identified in Requirement 10 documented?",
    domain: "Policy Documentation",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Undocumented policies can lead to inconsistent implementation and security gaps.",
    remediation: "Document all security policies and operational procedures related to Requirement 10, ensuring clarity and accessibility for relevant personnel."
  },
  {
    question: "Are these documents kept up to date?",
    domain: "Policy Management",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Outdated policies and procedures may not address current threats effectively.",
    remediation: "Regularly review and update security policies and procedures related to Requirement 10 to ensure their relevance and effectiveness."
  },
  {
    question: "Are these policies and procedures in use and known to all affected parties?",
    domain: "Policy Implementation and Awareness",
    requirement: "12.1, 10",
    issueIfNotCompliant: "Policies not actively followed can lead to security breaches and compliance issues.",
    remediation: "Ensure that security policies and procedures for Requirement 10 are actively implemented and communicated to all affected parties."
  },
  {
    question: "How are audit logs captured for actions taken by individuals with administrative access?",
    domain: "Audit Logging",
    requirement: "10.2",
    issueIfNotCompliant: "Without proper logging, tracking administrative actions is challenging.",
    remediation: "Implement audit logging mechanisms to capture all actions taken by individuals with administrative access, ensuring accountability."
  },
  {
    question: "Are all invalid logical access attempts captured in audit logs?",
    domain: "Audit Logging",
    requirement: "10.2.4",
    issueIfNotCompliant: "Not logging invalid access attempts can miss potential security incidents.",
    remediation: "Ensure that all invalid logical access attempts are captured in audit logs to detect and investigate unauthorized access attempts."
  },
  {
    question: "Are all changes to identification and authentication credentials captured in audit logs?",
    domain: "Audit Logging",
    requirement: "10.2.5",
    issueIfNotCompliant: "Unlogged changes to credentials can lead to security vulnerabilities.",
    remediation: "Capture all changes to identification and authentication credentials in audit logs for monitoring and review."
  },
  {
    question: "What details are recorded in audit logs for each auditable event?",
    domain: "Audit Log Content",
    requirement: "10.3",
    issueIfNotCompliant: "Incomplete logs may not provide sufficient information for analysis.",
    remediation: "Record detailed information in audit logs for each event, including user identification, event type, success or failure indication, and timestamp."
  },
  {
    question: "Is read access to audit log files limited to those with a job-related need?",
    domain: "Log Access Control",
    requirement: "10.5",
    issueIfNotCompliant: "Unrestricted access to audit logs can lead to information leakage.",
    remediation: "Restrict read access to audit log files to individuals with a job-related need to protect sensitive log information."
  },
  {
    question: "Are audit log files protected to prevent modifications?",
    domain: "Log Integrity",
    requirement: "10.5.5",
    issueIfNotCompliant: "Modifiable logs can lead to tampering and loss of reliable audit trails.",
    remediation: "Protect audit log files using measures like access controls and file integrity monitoring to prevent unauthorized modifications."
  },
  {
    question: "Are audit log files backed up promptly to a secure, central internal log server?",
    domain: "Log Management",
    requirement: "10.5.4",
    issueIfNotCompliant: "Without prompt backups, logs may be lost in case of system failure or tampering.",
    remediation: "Implement a process to back up audit log files promptly to a secure, central internal log server to ensure data preservation and integrity."
  },
  {
    question: "Are file integrity monitoring or change-detection mechanisms used on audit logs?",
    domain: "Log Monitoring",
    requirement: "10.5.5",
    issueIfNotCompliant: "Undetected changes to logs can compromise their reliability.",
    remediation: "Use file integrity monitoring or change-detection mechanisms on audit logs to detect unauthorized changes and ensure log integrity."
  },
  {
    question: "What audit logs are reviewed at least once daily?",
    domain: "Log Review",
    requirement: "10.6.1",
    issueIfNotCompliant: "Infrequent log reviews may miss critical security incidents.",
    remediation: "Identify key audit logs that require daily review, such as logs related to security functions and critical system components, and establish a routine for their examination."
  },
  {
    question: "Are automated mechanisms used to perform audit log reviews?",
    domain: "Automated Log Analysis",
    requirement: "10.6",
    issueIfNotCompliant: "Manual log reviews alone may not be timely or effective.",
    remediation: "Utilize automated mechanisms for audit log reviews to efficiently analyze large volumes of log data and identify anomalous or suspicious activities."
  },
  {
    question: "How often are logs of other system components reviewed?",
    domain: "System Log Review",
    requirement: "10.6.1",
    issueIfNotCompliant: "Neglected log reviews can miss indications of security issues.",
    remediation: "Determine an appropriate frequency for reviewing logs of various system components, considering their criticality and risk profile, to maintain continuous oversight and detect potential security incidents."
  }
];