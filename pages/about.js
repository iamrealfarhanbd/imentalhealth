import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from '../components/About/Banner'
import AboutGoal from '../components/About/Goal'
import AboutSkill from '../components/About/Skill'
import AboutProfessional from '../components/About/Professional'
import HomeTestimonial from '../components/Homepage/Testimonial'
import AboutTeam from '../components/About/Team'
import HomeClient from '../components/Homepage/Client'
import AboutContactForm from '../components/About/Contact-form'



export default function About(){
    return (
        <>

           <AboutBanner />
           <AboutGoal />
           <AboutSkill />
           <AboutProfessional />
           <HomeTestimonial />
           <AboutTeam />
           <HomeClient />
           <AboutContactForm />


        </>
    )
}