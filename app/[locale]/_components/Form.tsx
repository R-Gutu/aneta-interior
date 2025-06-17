'use client'
import React, { useState } from 'react';
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

const formSchema = z.object({
  fullName: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere").max(50, "Numele este prea lung"),
  email: z.string().email("Adresa de email nu este validă"),
  services: z.array(z.string()).min(1, "Selectează cel puțin un serviciu"),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere").max(1000, "Mesajul este prea lung"),
});

type FormData = z.infer<typeof formSchema>;

interface ServiceOption {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

export default function CreativeContactFormShadcn() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const serviceOptions: ServiceOption[] = [
    { id: 'render3d', label: 'Render 3D', defaultChecked: true },
    { id: 'designMobilier', label: 'Design mobilier personalizat' },
    { id: 'pachetPlus', label: 'Pachet Plus' },
    { id: 'designExterior', label: 'Design de exterior (fațade, terase, curți)' },
    { id: 'implementare', label: 'Implementare' },
    { id: 'consultanta', label: 'Consultanță design interior' }
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      services: ['render3d'], // Default to Render 3D selected
      message: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', values);
      alert('Mesajul a fost trimis cu succes!');

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('A apărut o eroare. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white pt-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 font-bricolage">
          Proiect creativ?
        </h1>
        <p className="text-xl text-gray-600 font-bricolage">
          Să avem o discuție productivă.
        </p>
      </div>

      <Form {...form}>
        <div className="space-y-8 font-inter">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-gray-700 font-semibold">
                    Nume complet
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Introdu numele tău"
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
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Introdu adresa de email"
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

          {/* Services Section */}
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <FormLabel className="text-lg text-gray-700 font-semibold">
                  Selectează serviciile de care ai nevoie:
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
                                  return checked
                                    ? field.onChange([...field.value, service.id])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== service.id
                                      )
                                    );
                                }}
                                disabled={isSubmitting}
                                className="data-[state=checked]:bg-gray-800 data-[state=checked]:border-gray-800"
                              />
                            </FormControl>
                            <FormLabel className="text-gray-700 font-normal cursor-pointer">
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
                  Mesajul tău
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descrie proiectul, obiectivele și prioritățile tale..."
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
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-900 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Se trimite...
                </span>
              ) : (
                'Trimite mesajul'
              )}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}