

import { useState } from "react"
import { motion } from "framer-motion"
import { Save, AlertCircle } from "lucide-react"

const StudentSettingAccountSettings = () => {
  const [account, setAccount] = useState({
    email: "alex.johnson@example.com",
    newEmail: "",
    language: "english",
    timezone: "America/New_York",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAccount({
      ...account,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Account settings updated:", account)
    // Show success message or handle API call
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl shadow-md p-6"
    >
      <h2 className="text-xl font-bold mb-6">Account Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Address</h3>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Current Email
            </label>
            <input
              id="email"
              type="email"
              value={account.email}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              disabled
            />
          </div>

          <div>
            <label htmlFor="newEmail" className="block text-sm font-medium mb-1">
              New Email
            </label>
            <input
              id="newEmail"
              name="newEmail"
              type="email"
              value={account.newEmail}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Enter new email address"
            />
            <p className="text-xs text-muted-foreground mt-1">
              We'll send a verification link to your new email address.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Preferences</h3>

          <div>
            <label htmlFor="language" className="block text-sm font-medium mb-1">
              Language
            </label>
            <select
              id="language"
              name="language"
              value={account.language}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>

          <div>
            <label htmlFor="timezone" className="block text-sm font-medium mb-1">
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={account.timezone}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="Europe/London">Greenwich Mean Time (GMT)</option>
              <option value="Europe/Paris">Central European Time (CET)</option>
              <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateFormat" className="block text-sm font-medium mb-1">
                Date Format
              </label>
              <select
                id="dateFormat"
                name="dateFormat"
                value={account.dateFormat}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeFormat" className="block text-sm font-medium mb-1">
                Time Format
              </label>
              <select
                id="timeFormat"
                name="timeFormat"
                value={account.timeFormat}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="12h">12-hour (AM/PM)</option>
                <option value="24h">24-hour</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Danger Zone</h3>

          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-600">Delete Account</h4>
                <p className="text-sm text-red-600/80 mt-1">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button
                  type="button"
                  className="mt-3 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg px-3 py-1 text-sm"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
          >
            <Save className="h-4 w-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default StudentSettingAccountSettings

