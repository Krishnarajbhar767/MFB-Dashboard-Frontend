import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";

const CertificationDetails = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg border p-3 sm:p-4 w-full"
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h3 className="font-medium text-sm sm:text-base">
                    Certification
                </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Upon completion of the course, you'll receive a certificate that
                you can share with your network and potential employers.
            </p>

            <div className="bg-muted/50 rounded-lg p-2 sm:p-3 flex items-center justify-between w-full">
                <div className="flex items-center gap-2 min-w-0">
                    <img
                        src="/placeholder.svg?height=40&width=40&text=Cert"
                        alt="Certificate preview"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex-shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="text-xs font-medium truncate">
                            JavaScript Mastery
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                            Accredited Certificate
                        </p>
                    </div>
                </div>

                <button className="text-primary hover:text-primary/80 ml-2">
                    <Download className="h-4 w-4 flex-shrink-0" />
                </button>
            </div>
        </motion.div>
    );
};

export default CertificationDetails;
