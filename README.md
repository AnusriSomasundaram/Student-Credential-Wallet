# Student-Credential-Wallet
A verifiable digital credential wallet that empowers students to manage academic certificates, skills, badges, and project achievements in one place, with selective sharing and credential verification for colleges and employers. Built by Team ERROR 404.

# 🎓 Student Credential Wallet

**Credentials you can prove. Data you control.**

A verifiable digital credential wallet that enables students to securely manage their academic achievements and selectively share them with colleges, recruiters, and other verifiers.

**Team:** ERROR 404

---

## 📌 Overview

Student Credential Wallet is a front-end prototype designed to give students greater control over their digital academic credentials. It brings certificates, course credits, badges, and project achievements into a single wallet while providing a simple way for recipients to inspect shared credentials.

The platform demonstrates how credentials can be organized by verification status and how students can control what information they share, how long a link remains active, and when access should be revoked.

## ✨ Key Features

- **Digital Credential Wallet** — View and manage certificates, badges, course credits, and project achievements.
- **Credential Status Tracking** — Distinguish verified, pending, unverified, student-added, and expired credentials.
- **Selective Sharing** — Choose which credentials and details to share with a recipient.
- **Credential Verification Demo** — Simulate authenticity checks and different verification outcomes.
- **Share Link Management** — Demonstrate expiry settings, recipient previews, and link revocation.
- **Student Dashboard** — View credential summaries, skill statistics, and verifier activity.
- **Issuer Dashboard** — Demonstrate issuing, correcting, renewing, and revoking credentials.
- **Responsive Interface** — Support desktop and mobile layouts.
- **Theme Support** — Switch between light and dark modes.
- **Example Data** — Use fictional student and issuer records for demonstration.

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Three.js for the 3D landing experience
- Recharts for dashboard visualizations
- Heroicons for interface icons
- Static JSON for demonstration data

*The final technology list should be updated to match the dependencies actually implemented in the repository.*

## 🏗️ Application Modules

| Module | Purpose |
|---|---|
| Landing Page | Introduces the platform and its core benefits |
| Authentication UI | Demonstrates sign-in and account creation |
| Student Wallet | Organizes credentials and verification statuses |
| Credential Details | Displays issuer information, dates, and skills |
| Sharing Workflow | Selects credentials and configures shared information |
| Verifier Page | Simulates credential verification without an account |
| Explore | Demonstrates uploads, projects, skills, and recognized issuers |
| Activity | Shows share links, access events, and revocation controls |
| Issuer Dashboard | Demonstrates credential lifecycle management |
| Profile & Settings | Manages demo preferences, privacy controls, and themes |

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) — preferably an active LTS release
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

### Production Build

To build the application:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🧪 Demo Data

The prototype uses fictional example data, including:

- **Student:** Maya Iyer
- **Example issuers:** Northstar Academy, Harbor Institute of Technology, Lumen Open Learning, and Civic Code Lab
- **Credentials:** 12 sample records across different credential statuses

These records are for demonstration purposes only and do not represent real students, institutions, or issued qualifications.

## 🔐 Security & Verification

The prototype demonstrates concepts such as selective disclosure, credential status checks, expiry, and revocation.

**Important:** The front-end demo does not, by itself, provide production-grade identity verification or cryptographic proof of issuer authenticity. Authentication, secure credential storage, issuer signature verification, and persistent revocation checks would require an appropriately designed backend or trusted verification infrastructure.

Uploaded and student-added credentials should not be treated as issuer-verified unless a real verification mechanism confirms their authenticity.

## 🗺️ Future Enhancements

- Cryptographic digital signatures for verifiable credentials
- Trusted issuer registration and public keys
- Backend authentication and secure credential storage
- Persistent credential revocation and expiry checks
- Standards-based verifiable credentials and selective disclosure
- Accessibility improvements and automated testing
- Production deployment and monitoring

## 👥 Team

**ERROR 404**

Developed as a prototype exploring student-controlled digital credentials and accessible credential verification.

## 📄 License

Choose a license before distributing the project publicly. For example, the MIT License can be used if you want others to reuse and modify the code under its terms.
