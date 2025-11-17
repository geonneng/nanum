'use client';

import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onNavigateToSpace: () => void;
  onNavigateToHistory: () => void;
  onNavigateToStart: () => void;
  currentSlide: number;
  totalSlides: number;
}

export default function Header({ onNavigateToSpace, onNavigateToHistory, onNavigateToStart, currentSlide, totalSlides }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
      style={{
        background: 'var(--bg-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="flex items-center justify-between gap-6 max-w-screen-2xl mx-auto">
        {/* 좌측: 제목 */}
        <div className="flex-shrink-0">
          <h1 style={{ 
            fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)',
            letterSpacing: '-0.01em',
            color: 'var(--text-color)',
            marginBottom: 0,
            fontWeight: 500,
            paddingLeft: '0.5rem'
          }}>
            <span className="hidden sm:inline">2025. 5학년 프로젝트 나눔</span>
            <span className="sm:hidden">프로젝트 나눔</span>
          </h1>
        </div>

        {/* 중앙: 섹션 바로가기 - 밑줄 버튼 */}
        <nav className="hidden md:flex gap-8 flex-shrink-0">
          <button
            onClick={onNavigateToStart}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 0',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontWeight: 500,
              color: 'var(--text-color)',
              cursor: 'pointer'
            }}
          >
            <span className="relative">
              시작
              <span 
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"
                style={{ bottom: '-4px' }}
              />
            </span>
          </button>
          
          <button
            onClick={onNavigateToSpace}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 0',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontWeight: 500,
              color: 'var(--text-color)',
              cursor: 'pointer'
            }}
          >
            <span className="relative">
              우주
              <span 
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"
                style={{ bottom: '-4px' }}
              />
            </span>
          </button>
          
          <button
            onClick={onNavigateToHistory}
            className="relative group"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0.5rem 0',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontWeight: 500,
              color: 'var(--text-color)',
              cursor: 'pointer'
            }}
          >
            <span className="relative">
              역사
              <span 
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"
                style={{ bottom: '-4px' }}
              />
            </span>
          </button>
        </nav>

        {/* 우측: 페이지 번호 & 다크모드 토글 */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div style={{
            fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            fontVariantNumeric: 'tabular-nums'
          }}>
            {currentSlide + 1}/{totalSlides}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

