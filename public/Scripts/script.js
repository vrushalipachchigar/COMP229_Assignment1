/* File Name: This is my style.css file which contains all my style for all elements 
 Name: Vrushali Pachchigar
 Student ID: 301312727
 Date: 9th June, 2023*/

//This is a script for the contact form on the contact page of my website that helps in submitting the data and redirecting user to homepage.

let contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you soon.');
    contactForm.reset();
    window.location.href = '/';
})