'use client';

import { 
  Brain, 
  Stethoscope, 
  ImageDown, 
  Pill, 
  VideoIcon, 
  LayoutDashboard,
  ScanLine,
  FileText,
  Users,
  Lightbulb
} from 'lucide-react';
import FeatureCard from '../features/FeatureCard';
import { motion } from 'framer-motion';

// Feature data for each category
const patientFeatures = [
  {
    icon: <Brain />,
    title: 'AI-Powered Symptom Checker',
    description: 'Enter your symptoms and our AI will suggest possible conditions and recommended tests.',
  },
  {
    icon: <Stethoscope />,
    title: 'Test Recommendation System',
    description: 'AI suggests appropriate lab tests based on your symptoms and medical history.',
  },
  {
    icon: <ImageDown />,
    title: 'Report Analysis & Insights',
    description: 'AI reads and explains your diagnostic reports (MRI, X-ray, blood tests, etc.).',
  },
  {
    icon: <Pill />,
    title: 'Medicine Recommendations',
    description: 'AI suggests medications based on your diagnosis and medical guidelines.',
  },
  {
    icon: <VideoIcon />,
    title: 'Telemedicine Integration',
    description: 'Connect with doctors for AI-assisted consultations from anywhere.',
  },
  {
    icon: <LayoutDashboard />,
    title: 'Health Dashboard',
    description: 'Access your personal health records, test results, and AI recommendations in one place.',
  },
];

const doctorFeatures = [
  {
    icon: <ScanLine />,
    title: 'AI-Powered Medical Image Analysis',
    description: 'Automatic detection of tumors, fractures, infections, etc., in medical scans.',
  },
  {
    icon: <FileText />,
    title: 'Automated Report Summarization',
    description: 'AI summarizes lab reports for faster diagnosis and improved workflow.',
  },
  {
    icon: <Users />,
    title: 'Patient Case Management',
    description: 'Track patient progress and AI-generated health insights efficiently.',
  },
  {
    icon: <Lightbulb />,
    title: 'Decision Support System',
    description: 'AI provides data-driven second opinions for treatment plans and diagnoses.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful AI Features
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our AI-powered healthcare platform offers cutting-edge solutions for patients, 
            doctors, and healthcare providers.
          </motion.p>
        </div>

        {/* Patient Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
              <Users size={20} />
            </span>
            For Patients
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Doctor Features */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 p-2 rounded-lg mr-3">
              <Stethoscope size={20} />
            </span>
            For Healthcare Professionals
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 