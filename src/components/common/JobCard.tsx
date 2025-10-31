import React from "react";
import type { Job } from "../../services/seed/jobsSeed";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const navigate = useNavigate();
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-emerald-100 text-emerald-800";
      case "Remote":
        return "bg-blue-100 text-blue-800";
      case "Part-time":
        return "bg-yellow-100 text-yellow-800";
      case "Contract":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleJobCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    return `${diffInDays} days ago`;
  };

  return (
    <div 
      onClick={handleJobCardClick} 
      className="linkedin-card p-6 cursor-pointer group"
    >
      <div className="flex items-start space-x-4">
        {/* Company Logo */}
        <div className="w-14 h-14 bg-gradient-to-br from-[var(--linkedin-blue)] to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
          <span className="text-white font-bold text-xl">
            {job.jobType?.charAt(0) || "J"}
          </span>
        </div>

        {/* Job Details */}
        <div className="flex-grow min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 md:text-lg text-base mb-1 group-hover:text-[var(--linkedin-blue)] transition-colors line-clamp-1">
                {job.title}
              </h3>
              <p className="text-gray-600 md:text-sm text-xs font-medium mb-1">
                TalentFlow India • {job.jobType}
              </p>
              <p className="text-gray-500 text-xs flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
              </p>
            </div>
            <div className="text-right ml-2">
              <p className="md:text-sm text-xs font-bold text-[var(--linkedin-blue)]">
                {job.salary}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {formatDate(job.createdAt.toString())}
              </p>
            </div>
          </div>

          <p className="text-gray-700 sm:text-sm text-xs mb-4 line-clamp-2 leading-relaxed">
            {job.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                12 applicants
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Be an early applicant
              </span>
            </div>
            <button className="text-[var(--linkedin-blue)] font-semibold text-sm hover:underline">
              Apply →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
