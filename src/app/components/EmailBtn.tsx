'use client'

import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Mail, FileText } from 'lucide-react'

export const ContactButtons = () => {
  const email = 'samay.m2504@gmail.com'
  const resumeLink = 'https://drive.google.com/file/d/1G7eg4HnbhTVeZf4ui-xZhRJ7XCz9oHac/view?usp=drive_link'
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    copy(email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="flex gap-4">
      {/* Email Button */}
      <button
        className={`${
          copied && 'border-green-500 transition-none hover:border-green-500'
        } relative flex items-center border px-4 py-4 text-lg transition before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:bg-target before:px-8 before:py-4 before:text-textLight before:opacity-0 before:transition before:content-['Copy'] hover:border-target hover:before:scale-100 hover:before:opacity-100`}
        onClick={handleCopyEmail}
      >
        <Mail className="sm:hidden" />
        <span className="ml-4 border-l pl-4 sm:m-0 sm:border-0 sm:p-0">
          {email}
        </span>
        {copied && (
          <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-green-500 text-white">
            Copy
          </div>
        )}
      </button>

      {/* Resume Button */}
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center border px-4 py-4 text-lg transition hover:border-target"
      >
        <FileText className="sm:hidden" />
        <span className="ml-4 border-l pl-4 sm:m-0 sm:border-0 sm:p-0">
          View Resume
        </span>
      </a>
    </div>
  )
}
