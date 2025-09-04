import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, TrendingUp, Calendar, BarChart3, Image, Video, Share2 } from 'lucide-react'

const FALLBACK_THUMB = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=100'

const Dashboard = () => {
  const [creations, setCreations] = useState(null) // null => loading, [] => loaded empty, array => data
  const navigate = useNavigate()

  const getDashboardData = async () => {
    // simulate API latency
    await new Promise(r => setTimeout(r, 500))
    const enhancedData = [
      {
        id: 1,
        type: 'image',
        title: 'AI Generated Instagram Post',
        description: 'Futuristic cityscape with neon lights',
        createdAt: '2 hours ago',
        status: 'posted',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=100'
      },
      {
        id: 2,
        type: 'video',
        title: 'Marketing Video Content',
        description: 'Product showcase with dynamic animations',
        createdAt: '5 hours ago',
        status: 'scheduled',
        platform: 'X',
        thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=100'
      },
      {
        id: 3,
        type: 'image',
        title: 'Product Launch Image',
        description: 'Minimalist design with brand colors',
        createdAt: '1 day ago',
        status: 'posted',
        platform: 'Facebook',
        thumbnail: 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=100'
      },
      {
        id: 4,
        type: 'video',
        title: 'Brand Story Video',
        description: 'Behind the scenes content',
        createdAt: '2 days ago',
        status: 'draft',
        platform: 'Instagram',
        thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100'
      }
    ]
    setCreations(enhancedData)
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  const getStatusColor = useCallback((status) => {
    switch (status) {
      case 'posted': return 'bg-green-900 text-green-300 border-green-700'
      case 'scheduled': return 'bg-yellow-900 text-yellow-300 border-yellow-700'
      case 'draft': return 'bg-gray-700 text-gray-300 border-gray-600'
      default: return 'bg-gray-700 text-gray-300 border-gray-600'
    }
  }, [])

  const totals = useMemo(() => ({
    creations: creations?.length || 0
  }), [creations])

  const goTo = (path) => navigate(path)

  const openCreation = (c) => {
    if (c.type === 'image') return goTo('/ai/generate-image')
    if (c.type === 'video') return goTo('/ai/generate-videos')
    return
  }

  return (
    <div className='h-full overflow-y-auto p-6 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] relative'>
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className='mb-8 relative'>
        <h1 className='text-3xl font-bold text-[#FFD700] mb-2'>Dashboard</h1>
        <p className='text-gray-400'>Welcome back! Here&apos;s your content overview</p>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative'>
        <div className='bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700] transition-colors'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-gray-400 text-sm mb-1'>Total Creations</p>
              <h2 className='text-2xl font-bold text-[#FFD700]'>{totals.creations}</h2>
              <p className='text-green-400 text-xs mt-1'>+12% this week</p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center'>
              <Sparkles className='w-6 h-6 text-[#0F0F0F]' />
            </div>
          </div>
        </div>

        <div className='bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700] transition-colors'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-gray-400 text-sm mb-1'>Posts This Month</p>
              <h2 className='text-2xl font-bold text-[#FFD700]'>156</h2>
              <p className='text-green-400 text-xs mt-1'>+28% vs last month</p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center'>
              <TrendingUp className='w-6 h-6 text-[#0F0F0F]' />
            </div>
          </div>
        </div>

        <div className='bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700] transition-colors'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-gray-400 text-sm mb-1'>Scheduled Posts</p>
              <h2 className='text-2xl font-bold text-[#FFD700]'>23</h2>
              <p className='text-blue-400 text-xs mt-1'>Next in 2 hours</p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center'>
              <Calendar className='w-6 h-6 text-[#0F0F0F]' />
            </div>
          </div>
        </div>

        <div className='bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#FFD700] transition-colors'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-gray-400 text-sm mb-1'>Engagement Rate</p>
              <h2 className='text-2xl font-bold text-[#FFD700]'>8.4%</h2>
              <p className='text-green-400 text-xs mt-1'>+2.1% improvement</p>
            </div>
            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center'>
              <BarChart3 className='w-6 h-6 text-[#0F0F0F]' />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className='bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 relative'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-semibold text-[#FFD700]'>Recent Creations</h3>
          <button
            className='text-[#FFD700] hover:text-[#FFA500] text-sm font-medium transition-colors'
            onClick={() => goTo('/ai/generate-image')}
          >
            View All
          </button>
        </div>

        {/* Loading */}
        {creations === null && (
          <div className='space-y-4'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className='flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg border border-[#333333] animate-pulse'>
                <div className='w-16 h-16 rounded-lg bg-[#3A3A3A]' />
                <div className='flex-1 space-y-2'>
                  <div className='h-4 w-48 bg-[#3A3A3A] rounded'/>
                  <div className='h-3 w-72 bg-[#3A3A3A] rounded'/>
                </div>
                <div className='h-6 w-20 bg-[#3A3A3A] rounded-full'/>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {creations?.length === 0 && (
          <div className='text-gray-400 text-sm'>No creations yet. Start by generating an image or video.</div>
        )}

        {/* List */}
        {Array.isArray(creations) && creations.length > 0 && (
          <div className='space-y-4'>
            {creations.map((creation) => (
              <button
                key={creation.id}
                className='w-full text-left flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#333333] transition-colors cursor-pointer border border-[#333333] hover:border-[#FFD700]'
                onClick={() => openCreation(creation)}
              >
                <div className='relative'>
                  <img
                    src={creation.thumbnail || FALLBACK_THUMB}
                    alt={creation.title}
                    className='w-16 h-16 rounded-lg object-cover border border-[#333333]'
                    onError={(e) => { e.currentTarget.src = FALLBACK_THUMB }}
                  />
                  <div className='absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FFD700] flex items-center justify-center'>
                    {creation.type === 'image'
                      ? <Image className='w-3 h-3 text-[#0F0F0F]' />
                      : <Video className='w-3 h-3 text-[#0F0F0F]' />}
                  </div>
                </div>

                <div className='flex-1'>
                  <h4 className='font-medium text-white mb-1'>{creation.title}</h4>
                  <p className='text-gray-400 text-sm mb-2'>{creation.description}</p>
                  <div className='flex items-center gap-4 text-xs'>
                    <span className='text-gray-500'>{creation.createdAt}</span>
                    <span className='text-gray-500'>•</span>
                    <span className='text-gray-400'>{creation.platform}</span>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(creation.status)}`}>
                    {creation.status.charAt(0).toUpperCase() + creation.status.slice(1)}
                  </span>
                  <span className='p-2 text-gray-400 hover:text-[#FFD700] transition-colors'>
                    <Share2 className='w-4 h-4' />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className='mt-8 pt-6 border-t border-[#333333]'>
          <h4 className='text-lg font-medium text-[#FFD700] mb-4'>Quick Actions</h4>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <button
              className='p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#333333] transition-colors border border-[#333333] hover:border-[#FFD700] flex flex-col items-center gap-2 group'
              onClick={() => goTo('/ai/generate-image')}
            >
              <Image className='w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium text-gray-300 group-hover:text-[#FFD700]'>New Image</span>
            </button>

            <button
              className='p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#333333] transition-colors border border-[#333333] hover:border-[#FFD700] flex flex-col items-center gap-2 group'
              onClick={() => goTo('/ai/generate-videos')}
            >
              <Video className='w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium text-gray-300 group-hover:text-[#FFD700]'>New Video</span>
            </button>

            <button
              className='p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#333333] transition-colors border border-[#333333] hover:border-[#FFD700] flex flex-col items-center gap-2 group'
              onClick={() => goTo('/ai/post-insta')}
            >
              <Calendar className='w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium text-gray-300 group-hover:text-[#FFD700]'>Schedule</span>
            </button>

            <button
              className='p-4 bg-[#2A2A2A] rounded-lg hover:bg-[#333333] transition-colors border border-[#333333] hover:border-[#FFD700] flex flex-col items-center gap-2 group'
              onClick={() => goTo('/ai/post-x')}
            >
              <BarChart3 className='w-6 h-6 text-[#FFD700] group-hover:scale-110 transition-transform' />
              <span className='text-sm font-medium text-gray-300 group-hover:text-[#FFD700]'>Analytics</span>
            </button>
          </div>
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

export default Dashboard
