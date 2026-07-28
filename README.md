# Digital ZN Backend

Professional backend built with:

- Node.js
- Express
- PostgreSQL
- Supabase
- JWT Authentication

Author:
Zakaria benghazale  (scorp)

File tree :                                                                                                                                                                  
new version/                                                                                                                                                                  
├─ backend/                                                                                                                                                                  
│  ├─ src/                                                                                                                                                                  
│  │  ├─ config/                                                                                                                                                                  
│  │  │  ├─ env.js                                                                                                                                                                  
│  │  │  └─ jwt.js                                                                                                                                                                  
│  │  ├─ controllers/                                                                                                                                                                  
│  │  │  ├─ admin.controller.js                                                                                                                                                        
│  │  │  ├─ auth.controller.js                                                                                                                                                        
│  │  │  └─ contact.controller.js                                                                                                                                                      
│  │  ├─ database/                                                                                                                                                                     
│  │  │  ├─ connection.js                                                                                                                                                              
│  │  │  └─ testConnection.js                                                                                                                                                          
│  │  ├─ middleware/                                                                                                                                                                   
│  │  │  ├─ auth.middleware.js                                                                                                                                                         
│  │  │  └─ validation.middleware.js                                                                                                                                                   
│  │  ├─ routes/                                                                                                                                                                       
│  │  │  ├─ admin.routes.js                                                                                                                                                            
│  │  │  ├─ auth.routes.js                                                                                                                                                             
│  │  │  └─ contact.routes.js                                                                                                                                                          
│  │  ├─ scripts/                                                                                                                                                                      
│  │  │  └─ createAdmin.js                                                                                                                                                             
│  │  ├─ services/                                                                                                                                                                     
│  │  │  ├─ admin.service.js                                                                                                                                                           
│  │  │  ├─ auth.service.js                                                                                                                                                            
│  │  │  └─ contact.service.js                                                                                                                                                         
│  │  ├─ utils/                                                                                                                                                                        
│  │  │  └─ hashPassword.js                                                                                                                                                            
│  │  ├─ validators/                                                                                                                                                                   
│  │  │  ├─ auth.validator.js                                                                                                                                                          
│  │  │  └─ contact.validator.js                                                                                                                                                       
│  │  ├─ app.js                                                                                                                                                                        
│  │  └─ server.js                                                                                                                                                                     
│  ├─ .env                                                                                                                                                                             
│  ├─ .gitignore                                                                                                                                                                       
│  ├─ package-lock.json                                                                                                                                                                
│  └─ package.json                                                                                                                                                                     
├─ frontend/                                                                                                                                                                           
│  ├─ admin/                                                                                                                                                                           
│  │  ├─ login.css                                                                                                                                                                     
│  │  ├─ login.html                                                                                                                                                                    
│  │  └─ login.js                                                                                                                                                                      
│  ├─ assets/                                                                                                                                                                          
│  │  ├─ 4K GIF by Sehsucht Berlin.gif                                                                                                                                                 
│  │  ├─ intro logo .gif                                                                                                                                                               
│  │  ├─ logo.png                                                                                                                                                                      
│  │  ├─ portfolio-brand.png                                                                                                                                                           
│  │  ├─ portfolio-landing.png                                                                                                                                                         
│  │  ├─ Screenshot 2026-04-21 023542.png                                                                                                                                              
│  │  └─ Sequence-01.mp4                                                                                                                                                               
│  ├─ calculator/                                                                                                                                                                      
│  │  ├─ main.js                                                                                                                                                                       
│  │  ├─ style.css                                                                                                                                                                     
│  │  └─ suite.html                                                                                                                                                                    
│  ├─ index.html                                                                                                                                                                       
│  ├─ main.js                                                                                                                                                                          
│  └─ style.css                                                                                                                                                                        
└─  README.md                                                                                                                                                                          
