"use client";

import {
  Bot,
  Zap,
  MessageCircle,
  TrendingUp,
  Database,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: Bot,
    gradient: "from-indigo-500 to-purple-600",
    badgeVariant: "default" as const,
    index: 0,
  },
  {
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    badgeVariant: "secondary" as const,
    index: 1,
  },
  {
    icon: MessageCircle,
    gradient: "from-blue-500 to-indigo-600",
    badgeVariant: "outline" as const,
    index: 2,
  },
  {
    icon: TrendingUp,
    gradient: "from-green-500 to-blue-600",
    badgeVariant: "default" as const,
    index: 3,
  },
  {
    icon: Database,
    gradient: "from-orange-500 to-red-600",
    badgeVariant: "secondary" as const,
    index: 4,
  },
  {
    icon: Layers,
    gradient: "from-teal-500 to-green-600",
    badgeVariant: "outline" as const,
    index: 5,
  },
];

export default function ServicesSection() {
  const t = useTranslations("services");
  return (
    <section id="services" className="py-32 bg-slate-800/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t("aiSolutions")}</span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("tailored")}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative h-full bg-slate-800/30 border-slate-600/30 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/15 backdrop-blur-sm overflow-hidden rounded-2xl"
              >
                {/* Background Gradient Effect */}
                <div
                  className={`absolute -inset-px bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl blur-sm`}
                />

                {/* Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                  <Badge
                    variant={service.badgeVariant}
                    className="text-xs font-semibold px-3 py-1"
                  >
                    {t(`items.${service.index}.badge`)}
                  </Badge>
                </div>

                <CardHeader className="pb-6 relative p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}
                  >
                    <Icon className="h-10 w-10 text-white drop-shadow-sm" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-indigo-300 transition-colors font-black mb-4 leading-tight">
                    {t(`items.${service.index}.title`)}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-3">
                    {t(`items.${service.index}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative px-8 pb-8 flex-1">
                  <div className="space-y-6 h-full flex flex-col justify-between">
                    <ul className="space-y-4 flex-1">
                      {[0, 1, 2].map((featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <div
                            className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0`}
                          />
                          <span className="font-medium">
                            {t(`items.${service.index}.features.${featureIndex}`)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Action */}
                    <div className="pt-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between text-indigo-300 hover:text-white hover:bg-indigo-500/20 py-3 rounded-xl font-semibold"
                      >
                        {t("learnMore")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-400/30 rounded-3xl p-12 backdrop-blur-xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]" />

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce" />
            <div className="absolute top-12 right-12 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" />

            <div className="relative z-10 space-y-8">
              <div className="flex justify-center mb-6">
                <Badge
                  variant="outline"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-400/30"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t("cta.badge")}
                </Badge>
              </div>

              <h3 className="text-4xl font-black text-white mb-6">
                {t("cta.ready")}{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {t("cta.transform")}
                </span>{" "}
                {t("cta.yourBusiness")}
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t("cta.description")}
                <span className="text-indigo-300 font-medium">
                  {" "}
                  {t("cta.descriptionHighlight")}
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-10 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    {t("cta.scheduleConsultation")}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group border-2 border-indigo-400/40 bg-slate-800/40 backdrop-blur-xl text-indigo-300 hover:text-white hover:bg-indigo-500/20 px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:border-indigo-400 hover:scale-105"
                >
                  {t("cta.viewPricing")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
