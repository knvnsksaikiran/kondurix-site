
// Simple contact form handling (prototype)
// Stores leads to localStorage and shows a message.
document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('leadForm');
    const msg = document.getElementById('formMessage');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const type = document.getElementById('type').value;
            if(!name || !email || !type){
                alert('Please fill in Name, Email and Project Type');
                return;
            }
            const org = document.getElementById('org').value.trim();
            const message = document.getElementById('message').value.trim();
            const leads = JSON.parse(localStorage.getItem('kondurix_leads') || '[]');
            leads.push({name,email,org,type,message,time:new Date().toISOString()});
            localStorage.setItem('kondurix_leads', JSON.stringify(leads));
            if(msg){ msg.style.display='block'; msg.textContent = 'Thank you — your inquiry has been received.'; }
            form.reset();
            setTimeout(()=>{ if(msg) msg.style.display='none'; }, 5000);
        });
    }
});
