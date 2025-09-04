import React, { useState } from 'react'
import { Instagram, Calendar, Clock, Image, Video, Hash, AtSign, Send, Eye } from 'lucide-react'

const PostOnInstagram = () => {
  const [postContent, setPostContent] = useState('')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [mediaType, setMediaType] = useState('image')
  const [scheduledTime, setScheduledTime] = useState('')
  const [hashtags, setHashtags] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [postPreview, setPostPreview] = useState(false)

  const dummyMediaOptions = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=400', title: 'AI Cityscape' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=400', title: 'Abstract Art' },
    { id: 3, type: 'video', url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400', title: 'Motion Graphics' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400', title: 'Product Shot' }
  ]

  const handlePost = () => {
    setIsPosting(true)
    setTimeout(() => {
      setIsPosting(false)
      alert('Posted successfully to Instagram!')
    }, 2000)
  }

  return (
    <div className='h-full overflow-y-auto bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] text-white relative'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className='flex h-full'>
        {/* Left Panel - Post Creation */}
        <div className='w-96 bg-[#1A1A1A] border-r border-[#333333] p-6 overflow-y-auto'>
          {/* Header */}
          <div className='text-center mb-6'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E1306C] to-[#833AB4] flex items-center justify-center'>
              <Instagram className='w-8 h-8 text-white' />
            </div>
            <h1 className='text-2xl font-bold text-[#FFD700] mb-2'>Post to Instagram</h1>
            <p className='text-gray-400 text-sm'>Create and schedule your Instagram content</p>
          </div>

          {/* Media Selection */}
          <div className='space-y-4 mb-6'>
            <h3 className='text-[#FFD700] font-medium'>Select Media</h3>
            <div className='grid grid-cols-2 gap-3'>
              {dummyMediaOptions.map((media) => (
                <div
                  key={media.id}
                  onClick={() => setSelectedMedia(media)}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedMedia?.id === media.id 
                      ? 'border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)]' 
                      : 'border-[#333333] hover:border-[#FFD700]'
                  }`}
                >
                  <img src={media.url} alt={media.title} className='w-full h-full object-cover' />
                  <div className='absolute top-2 right-2'>
                    {media.type === 'image' ? 
                      <Image className='w-4 h-4 text-white' /> : 
                      <Video className='w-4 h-4 text-white' />
                    }
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2'>
                    {media.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caption */}
          <div className='space-y-3 mb-6'>
            <label className='block text-[#FFD700] font-medium'>Caption</label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder='Write your caption here... Use @mentions and #hashtags'
              className='w-full h-32 p-4 bg-[#2A2A2A] border border-[#333333] rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent'
            />
            <p className='text-xs text-gray-500'>{postContent.length}/2200 characters</p>
          </div>

          {/* Hashtags */}
          <div className='space-y-3 mb-6'>
            <label className='block text-[#FFD700] font-medium flex items-center gap-2'>
              <Hash className='w-4 h-4' />
              Hashtags
            </label>
            <input
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder='#ai #socialmedia #content #marketing'
              className='w-full p-3 bg-[#2A2A2A] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent'
            />
          </div>

          {/* Scheduling */}
          <div className='space-y-3 mb-6'>
            <label className='block text-[#FFD700] font-medium flex items-center gap-2'>
              <Clock className='w-4 h-4' />
              Schedule Post
            </label>
            <input
              type='datetime-local'
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className='w-full p-3 bg-[#2A2A2A] border border-[#333333] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent'
            />
            <p className='text-xs text-gray-500'>Leave empty to post immediately</p>
          </div>

          {/* Action Buttons */}
          <div className='space-y-3'>
            <button
              onClick={() => setPostPreview(!postPreview)}
              className='w-full py-3 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#333333] transition border border-[#333333] hover:border-[#FFD700] flex items-center justify-center gap-2'
            >
              <Eye className='w-4 h-4' />
              Preview Post
            </button>
            
            <button
              onClick={handlePost}
              disabled={!selectedMedia || !postContent.trim() || isPosting}
              className={`w-full py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                isPosting
                  ? 'bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white opacity-75 cursor-not-allowed'
                  : selectedMedia && postContent.trim()
                  ? 'bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(225,48,108,0.3)]'
                  : 'bg-[#2A2A2A] text-gray-500 cursor-not-allowed'
              }`}
            >
              {isPosting ? (
                <div className='flex items-center justify-center gap-2'>
                  <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  Posting...
                </div>
              ) : (
                <div className='flex items-center justify-center gap-2'>
                  <Send className='w-5 h-5' />
                  {scheduledTime ? 'Schedule Post' : 'Post Now'}
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className='flex-1 bg-[#0F0F0F] p-8 flex items-center justify-center'>
          {!selectedMedia ? (
            <div className='text-center max-w-md'>
              <div className='w-32 h-32 mx-auto mb-6 rounded-full border-4 border-dashed border-[#FFD700] flex items-center justify-center'>
                <Instagram className='w-16 h-16 text-[#FFD700]' />
              </div>
              <h2 className='text-2xl font-semibold text-[#FFD700] mb-4'>Instagram Post Preview</h2>
              <p className='text-gray-400'>Select media and add caption to see your post preview</p>
            </div>
          ) : (
            <div className='max-w-md w-full'>
              {/* Instagram Post Mock */}
              <div className='bg-[#1A1A1A] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl'>
                {/* Post Header */}
                <div className='flex items-center gap-3 p-4 border-b border-[#333333]'>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop" 
                    className='w-10 h-10 rounded-full border-2 border-[#FFD700]' 
                    alt="Profile"
                  />
                  <div className='flex-1'>
                    <h3 className='font-medium text-white'>visioncast_ai</h3>
                    <p className='text-xs text-gray-400'>Sponsored</p>
                  </div>
                  <button className='text-gray-400 hover:text-white'>
                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="1"/>
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>

                {/* Post Media */}
                <div className='relative aspect-square'>
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.title}
                    className='w-full h-full object-cover'
                  />
                  {selectedMedia.type === 'video' && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-12 h-12 bg-black/50 rounded-full flex items-center justify-center'>
                        <Video className='w-6 h-6 text-white ml-1' />
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className='p-4 space-y-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <svg className='w-6 h-6 text-white hover:text-red-500 cursor-pointer transition' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <svg className='w-6 h-6 text-white hover:text-[#FFD700] cursor-pointer transition' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <svg className='w-6 h-6 text-white hover:text-[#FFD700] cursor-pointer transition' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <svg className='w-6 h-6 text-white hover:text-[#FFD700] cursor-pointer transition' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>

                  <div className='text-sm'>
                    <p className='text-white mb-1'><strong>visioncast_ai</strong></p>
                    <p className='text-white leading-relaxed'>
                      {postContent || 'Your caption will appear here...'}
                    </p>
                    {hashtags && (
                      <p className='text-[#FFD700] mt-2'>
                        {hashtags.split(' ').map((tag, index) => (
                          <span key={index} className='mr-1 hover:underline cursor-pointer'>
                            {tag.startsWith('#') ? tag : `#${tag}`}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>

                  <div className='text-xs text-gray-400 border-t border-[#333333] pt-3'>
                    {scheduledTime ? (
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        Scheduled for {new Date(scheduledTime).toLocaleString()}
                      </div>
                    ) : (
                      'Will post immediately'
                    )}
                  </div>
                </div>
              </div>

              {/* Post Stats Preview */}
              <div className='mt-6 bg-[#1A1A1A] border border-[#333333] rounded-lg p-4'>
                <h4 className='text-[#FFD700] font-medium mb-3'>Estimated Performance</h4>
                <div className='grid grid-cols-3 gap-4 text-center text-sm'>
                  <div>
                    <p className='text-2xl font-bold text-white'>2.4K</p>
                    <p className='text-gray-400'>Likes</p>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-white'>186</p>
                    <p className='text-gray-400'>Comments</p>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-white'>1.2K</p>
                    <p className='text-gray-400'>Shares</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
       <style>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: #1A1A1A;
        }
        div::-webkit-scrollbar-thumb {
          background: #FFD700;
          border-radius: 6px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #FFA500;
        }
      `}</style>
    </div>
  )
}

export default PostOnInstagram