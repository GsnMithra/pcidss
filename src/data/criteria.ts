export const a: string [] = [
  "The merchant uses only standalone, PCI-listed approved PTS POI devices (excludes SCRs and SCRPs) connected via IP to merchant’s payment processor to take customers’ payment card information.",
  "The standalone IP-connected POI devices are validated to the PTS POI program as listed on the PCI SSC website (excludes SCRs and SCRPs).",
  "The standalone IP-connected PTS POI devices are not connected to any other systems within the merchant environment (this can be achieved via network segmentation to isolate PTS POI devices from other systems).",
  "The only transmission of account data is from the approved PTS POI devices to the payment processor.",
  "The PTS POI device does not rely on any other device (e.g., computer, mobile phone, tablet, etc.) to connect to the payment processor.",
  "The merchant does not store account data in electronic format.",
  "Any account data the merchant might retain is on paper (for example, printed reports or receipts), and these documents are not received electronically.",
]

export const b: string [] = [
  "The merchant accepts only card-not-present (e-commerce or mail/telephone-order) transaction.",
  "All processing of account data is entirely outsourced to a PCI DSS compliant third-party service provider (TPSP)/payment processor. ",
  "The merchant does not electronically store, process, or transmit any account data on merchant systems or premises, but relies entirely on a TPSP(s) to handle all these functions.",
  "The merchant has reviewed the PCI DSS Attestation of Compliance form(s) for its TPSP(s) and confirmed that TPSP(s) are PCI DSS compliant for the services being used by the merchant.",
  "Any account data the merchant might retain is on paper (for example, printed reports or receipts), and these documents are not received electronically. ",
  "Additionally, for e-commerce channels: All elements of the payment page(s)/form(s) delivered to the customer’s browser originate only and directly from a PCI DSS compliant TPSP/payment processor."
]

export const c: string [] = [
  "The merchant has a payment application system and an Internet connection on the same device and/or same local area network (LAN).",
  "The payment application system is not connected to any other system within the merchant environment.",
  "The physical location of the POS environment is not connected to other premises or locations, and any LAN is for a single location only.",
  "Merchant does not store account data in electronic format.",
  "Any account data the merchant might retain is on paper (for example, printed reports or receipts), and these documents are not received electronically."
]

export const p2pe: string [] = [
  "All payment processing is via a validated PCI-listed P2PE solution (per Part 2e above).",
  "The only systems in the merchant environment that store, process, or transmit account data are the payment terminals from a validated PCI-listed P2PE solution.",
  "The merchant does not otherwise receive, transmit, or store account data electronically.",
  "Any account data the merchant might retain is on paper (for example, printed reports or receipts), and these documents are not received electronically.",
  "The merchant has implemented all controls in the P2PE Instruction Manual (PIM) provided by the P2PE Solution Provider."
]
