"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1561],{70272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const r={title:"Transparent Data Encryption"},a="Transparent Data Encryption",o={id:"security/transparent-data-encryption",title:"Transparent Data Encryption",description:"To meet the requirements for protecting user data security, Cloudberry Database supports Transparent Data Encryption (TDE).",source:"@site/docs/security/transparent-data-encryption.md",sourceDirName:"security",slug:"/security/transparent-data-encryption",permalink:"/docs/security/transparent-data-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/security/transparent-data-encryption.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"Transparent Data Encryption"},sidebar:"docsbars",previous:{title:"Set Password Profile",permalink:"/docs/security/set-password-profile"},next:{title:"Backup and Restore Overview",permalink:"/docs/sys-admin/backup-and-restore/"}},l={},c=[{value:"Introduction to encryption algorithms",id:"introduction-to-encryption-algorithms",level:2},{value:"Basic concepts",id:"basic-concepts",level:3},{value:"Key management module",id:"key-management-module",level:3},{value:"Algorithm classification",id:"algorithm-classification",level:3},{value:"AES encryption algorithm",id:"aes-encryption-algorithm",level:4},{value:"More ISO/IEC encryption algorithms",id:"more-isoiec-encryption-algorithms",level:4},{value:"User instructions",id:"user-instructions",level:2},{value:"Verify TDE effectiveness",id:"verify-tde-effectiveness",level:2},{value:"Verification process",id:"verification-process",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"transparent-data-encryption",children:"Transparent Data Encryption"}),"\n",(0,s.jsx)(n.p,{children:"To meet the requirements for protecting user data security, Cloudberry Database supports Transparent Data Encryption (TDE)."}),"\n",(0,s.jsx)(n.p,{children:"TDE is a technology used to encrypt database data files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"Data" refers to the data in the database.'}),"\n",(0,s.jsx)(n.li,{children:"Files are stored in ciphertext on the hard drive disk and processed in plaintext in memory. TDE is used to protect static data, so it is also known as static data encryption."}),"\n",(0,s.jsx)(n.li,{children:'"Transparent" means users do not need to change their operational habits. TDE automatically manages the encryption/decryption process without user or application intervention.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-encryption-algorithms",children:"Introduction to encryption algorithms"}),"\n",(0,s.jsx)(n.h3,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DEK (Data Encryption Key): The key used to encrypt data, generated by the database and stored in memory."}),"\n",(0,s.jsx)(n.li,{children:"DEK plaintext: The same meaning with DEK, but can only be stored in memory."}),"\n",(0,s.jsx)(n.li,{children:"Master key: The key used to encrypt the DEK."}),"\n",(0,s.jsx)(n.li,{children:"DEK ciphertext: The DEK encrypted with the master key, stored persistently."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"key-management-module",children:"Key management module"}),"\n",(0,s.jsx)(n.p,{children:"The key management module is the core component of TDE, implementing a two-tier key structure: master key and DEK. The master key is used to encrypt the DEK and is stored outside the database; the DEK is used to encrypt database data and is stored in the database in ciphertext."}),"\n",(0,s.jsx)(n.h3,{id:"algorithm-classification",children:"Algorithm classification"}),"\n",(0,s.jsx)(n.p,{children:"Encryption algorithms are divided into the following types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Symmetric encryption: The same key is used for both encryption and decryption."}),"\n",(0,s.jsx)(n.li,{children:"Asymmetric encryption: Public key for encryption, private key for decryption, suitable for one-to-many and many-to-one encryption needs."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Block encryption algorithms in symmetric encryption are the mainstream choice, offering better performance than stream encryption and asymmetric encryption. Cloudberry Database supports two block encryption algorithms: AES and SM4."}),"\n",(0,s.jsx)(n.h4,{id:"aes-encryption-algorithm",children:"AES encryption algorithm"}),"\n",(0,s.jsx)(n.p,{children:"AES is an internationally standardized block encryption algorithm, supporting 128, 192, and 256-bit keys. Common encryption modes include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ECB: Electronic Codebook mode"}),"\n",(0,s.jsx)(n.li,{children:"CBC: Cipher Block Chaining mode"}),"\n",(0,s.jsx)(n.li,{children:"CFB: Cipher Feedback mode"}),"\n",(0,s.jsx)(n.li,{children:"OFB: Output Feedback mode"}),"\n",(0,s.jsx)(n.li,{children:"CTR: Counter mode"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"more-isoiec-encryption-algorithms",children:"More ISO/IEC encryption algorithms"}),"\n",(0,s.jsx)(n.p,{children:"More ISO/IEC encryption algorithms include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ISO/IEC 14888-3/AMD1 (i.e., SM2): Asymmetric encryption, based on ECC, outperforms RSA."}),"\n",(0,s.jsx)(n.li,{children:"ISO/IEC 10118-3:2018 (i.e., SM3): Message digest algorithm, similar to MD5, outputs 256 bits."}),"\n",(0,s.jsx)(n.li,{children:"ISO/IEC 18033-3:2010/AMD1:2021 (i.e., SM4): Symmetric encryption algorithm for wireless LAN standards, supports 128-bit keys and block lengths."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"user-instructions",children:"User instructions"}),"\n",(0,s.jsx)(n.p,{children:"Before using the TDE feature, ensure the following conditions are met:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install OpenSSL: OpenSSL is expected to be installed on the Cloudberry Database node. Typically, Linux distributions come with OpenSSL pre-installed."}),"\n",(0,s.jsx)(n.li,{children:"Cloudberry Database version: Make sure your Cloudberry Database version is not less than v1.6.0, which is when TDE support was introduced."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When deploying Cloudberry Database, you can enable the TDE feature through settings, making all subsequent data encryption operations completely transparent to users. To enable TDE during database initialization, use the ",(0,s.jsx)(n.code,{children:"gpinitsystem"})," command with the ",(0,s.jsx)(n.code,{children:"-T"})," parameter. Cloudberry Database supports two encryption algorithms: AES and SM4. Here are examples of enabling TDE:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using the AES256 encryption algorithm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gpinitsystem -c gpinitsystem_config -T AES256\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using the SM4 encryption algorithm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gpinitsystem -c gpinitsystem_config -T SM4\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verify-tde-effectiveness",children:"Verify TDE effectiveness"}),"\n",(0,s.jsx)(n.p,{children:"The transparent data encryption feature is invisible to users, meaning that enabling or disabling this feature does not affect the user experience during read and write operations. However, to verify the effectiveness of encryption, you can simulate a key file loss scenario and ensure that the database cannot start without the key file by following these steps."}),"\n",(0,s.jsx)(n.p,{children:"The key file is located on the Coordinator node. To locate the key file, first find the data directory of the Coordinator node. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"COORDINATOR_DATA_DIRECTORY=/home/gpadmin/work/data0/master/gpseg-1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, find the key files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ pwd\n/home/gpadmin/work/data0/master/gpseg-1\n\n$ ls -l pg_cryptokeys/live/\ntotal 8\n-rw------- 1 gpadmin gpadmin 48 Apr 12 10:26 relation.wkey\n-rw------- 1 gpadmin gpadmin 48 Apr 12 10:26 wal.wkey\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"relation.wkey"})," file is the key used to encrypt data files, while the ",(0,s.jsx)(n.code,{children:"wal.wkey"})," file is used to encrypt WAL logs. Currently, only ",(0,s.jsx)(n.code,{children:"relation.wkey"})," is active; the WAL logs are not yet encrypted."]}),"\n",(0,s.jsx)(n.h3,{id:"verification-process",children:"Verification process"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a table and insert data."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create an append-only (AO) table and insert data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"postgres=# create table ao2 (id int) with(appendonly=true);\npostgres=# insert into ao2 select generate_series(1,10);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ensure the data has been successfully inserted."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stop the database."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gpstop -a\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Simulate key file loss."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Switch to the directory where the key files are stored:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd /home/gpadmin/work/data0/master/gpseg-1/pg_cryptokeys/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Move the key files to another directory (to simulate key file loss):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv live backup\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Attempt to start the database."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the database using the ",(0,s.jsx)(n.code,{children:"gpstart"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gpstart -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"The database will fail to start because of the missing key files. You will see an error in the database logs on the Coordinator node, similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"FATAL: cluster has no data encryption keys\n"})}),"\n",(0,s.jsx)(n.p,{children:"This confirms that the database cannot start without the key files, ensuring data security."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restore the key files by moving the previously backed-up key files back to the original directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mv backup live\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart the database and verify the data."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start the database again using the ",(0,s.jsx)(n.code,{children:"gpstart"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gpstart -a\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once the database has successfully started, query the ",(0,s.jsx)(n.code,{children:"ao2"})," table to verify the data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"postgres=# select * from ao2 order by id;\nid\n----\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n(10 rows)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By following these steps, you can verify the effectiveness of the transparent data encryption feature, ensuring that the database cannot start without the key files, thus securing the data at rest."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);