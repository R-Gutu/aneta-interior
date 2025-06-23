'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from 'next-intl';

// EmailJS Configuration Constants - Fill these with your actual values
const EMAILJS_SERVICE_ID = 'service_62o6enz'; 
//  service_ygz6zab
const EMAILJS_TEMPLATE_ID = 'template_kdqt7gg';
// template_zyvruk2
const EMAILJS_PUBLIC_KEY = 'AIa1W7ML_7ntMF3d1';
// NxaXNUOZOCYcvu-Jx

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(), // Optional field for phone number
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormElement({ showPhone = false }: { showPhone?: boolean }) {
  const t = useTranslations('contactForm');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const serviceOptions = [
    { id: 'render3d', label: t('services.render3d') },
    { id: 'designMobilier', label: t('services.designMobilier') },
    { id: 'pachetPlus', label: t('services.pachetPlus') },
    { id: 'designExterior', label: t('services.designExterior') },
    { id: 'implementare', label: t('services.implementare') },
    { id: 'consultanta', label: t('services.consultanta') }
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      services: [],
      message: '',
      phone: '', // Optional field for phone number
    },
  });

  const onSubmit = async (values: FormData) => {
    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration is missing');
      alert(t('configError') || 'Email configuration error. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get service labels for the selected services
      const selectedServiceLabels = values.services.map(serviceId => {
        const service = serviceOptions.find(option => option.id === serviceId);
        return service ? service.label : serviceId;
      });

      // Prepare email data
      const emailData = {
        title: 'New Contact Form Submission',
        time: new Date().toLocaleString(),
        fullName: values.fullName,
        email: values.email,
        phone: values.phone || '', // ✅ Add phone field
        services: selectedServiceLabels.join(', '),
        servicesCount: values.services.length,
        message: values.message,
        // Include individual services for template flexibility
        ...values.services.reduce((acc, service, index) => {
          acc[`service_${index + 1}`] = serviceOptions.find(opt => opt.id === service)?.label || service;
          return acc;
        }, {} as Record<string, string>)
      };
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('EmailJS Success:', result);
      alert(t('successMessage') || 'Message sent successfully!');

      // Reset form after successful submission
      form.reset({
        fullName: '',
        email: '',
        services: ['render3d'],
        message: '',
        phone: '',
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(t('errorMessage') || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-inter">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-gray-700 font-semibold">
                  {t('fullNameLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t('fullNamePlaceholder')}
                    {...field}
                    disabled={isSubmitting}
                    className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600 placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-gray-700 font-semibold">
                  {t('emailLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    {...field}
                    disabled={isSubmitting}
                    className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600 placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {showPhone && <div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-gray-700 font-semibold">
                  {t('phoneLabel')}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t('phonePlaceholder')}
                    {...field}
                    disabled={isSubmitting}
                    className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600 placeholder:text-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>}

        {/* Services Section */}
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700 font-semibold">
                {t('servicesLabel')}
              </FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {serviceOptions.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, service.id]);
                                } else {
                                  field.onChange(field.value?.filter((value) => value !== service.id));
                                }
                              }}
                              disabled={isSubmitting}
                              className="data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-800"
                            />
                          </FormControl>
                          <FormLabel className="text-gray-700 text-left font-normal cursor-pointer">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Section */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-700 font-semibold">
                {t('messageLabel')}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  {...field}
                  disabled={isSubmitting}
                  rows={4}
                  className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus-visible:ring-0 focus-visible:border-gray-600 placeholder:text-gray-400 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer oklch(14.7% 0.004 49.25) text-white px-8 py-3 hover:oklch(14.7% 0.004 49.25)"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('submitButtonSending')}
              </span>
            ) : (
              t('submitButton')
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}