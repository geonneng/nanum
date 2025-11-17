'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SlideContainer, { navigateToSlide } from '@/components/SlideContainer';
import Slide from '@/components/Slide';
import ShootingStars from '@/components/ShootingStars';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNavigateToStart = () => {
    navigateToSlide(0); // 페이지 1: 표지
  };

  const handleNavigateToSpace = () => {
    navigateToSlide(7); // 페이지 8: 사례 1 - 우주 프로젝트
  };

  const handleNavigateToHistory = () => {
    navigateToSlide(13); // 페이지 14: 새로운 도전 - 역사 (인덱스는 13)
  };

  return (
    <>
      <ShootingStars />
      <Header 
        onNavigateToStart={handleNavigateToStart}
        onNavigateToSpace={handleNavigateToSpace}
        onNavigateToHistory={handleNavigateToHistory}
        currentSlide={currentSlide}
        totalSlides={30}
      />
      
      <SlideContainer onSlideChange={setCurrentSlide}>
        {/* 페이지 1: 표지 */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-20" style={{ transform: 'translateY(-2.5rem)' }}>
            <div className="space-y-16">
              <h1>놂삶앎</h1>
              <h2>5학년 체험 중심 프로젝트 사례</h2>
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                놀며, 살며, 알며 – 교실 속 배움을 체험으로 연결
              </p>
            </div>
            
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>
                평산초등학교 교사 조건형
              </p>
            </div>
          </div>
        </Slide>

        {/* 페이지 2: 발표자 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-12">
            <h2>발표자: 5학년 교사 조건형</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
              <div className="md:col-span-2 space-y-8">
                <p>'체험' 키워드로 1년간 진행한 수업 이야기</p>
                <p>'성공 사례' 발표가 아닌 '고민과 시도'를 나누는 공감의&nbsp;장</p>
              </div>
              
              <div className="md:col-span-3" style={{ 
                width: '100%',
                height: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/2페이지 사진.jpg" 
                  alt="발표자 프로필"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 3: 목차 */}
        <Slide>
          <div className="max-w-3xl mx-auto space-y-16">
            <h2>오늘, 우리가 나눌 이야기</h2>
            
            <div className="space-y-8">
              <div>
                <h3>1부. 왜 '체험'인가</h3>
              </div>
              
              <div>
                <h3>2부. 시도와 성찰 (우주 프로젝트)</h3>
              </div>
              
              <div>
                <h3>3부. 새로운 도전 (역사 '추체험' 프로젝트)</h3>
              </div>
              
              <div>
                <h3>4부. 교사의 도구 (웹 애플리케이션 만들기)</h3>
              </div>
              
              <div>
                <h3>5부. 맺음말</h3>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 4: 화두 - '놂삶앎' */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center max-w-4xl mx-auto space-y-20" style={{ transform: 'translateY(-2.5rem)' }}>
            <div className="text-center space-y-16">
              <div>
                <p style={{ 
                  color: 'var(--text-tertiary)', 
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '2rem'
                }}>
                  화두
                </p>
                <h1>'놂삶앎'</h1>
              </div>
              
              <div className="space-y-6">
                <h3 style={{ fontWeight: 400, lineHeight: 1.6 }}>
                  "교실에서 어떻게 '놀면서' '살면서' '알게' 할 것인가?"
                </h3>
                <p>5학년 수업을 관통하는 가장 큰 화두</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 5: '놂삶앎'의 재해석 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>'놂삶앎'의 재해석: "체험하며 배우자"</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3>'놀이'</h3>
                <p style={{ marginBottom: 0 }}>즐거운 몰입의 과정</p>
              </div>
              
              <div className="space-y-4">
                <h3>'삶'</h3>
                <p style={{ marginBottom: 0 }}>교실 밖 실제</p>
              </div>
              
              <div className="space-y-4">
                <h3>'앎'</h3>
                <p style={{ marginBottom: 0 }}>과정과 실제의 만남</p>
              </div>
            </div>
            
            <blockquote style={{ marginTop: '4rem' }}>
              "듣고 잊어버리고, 보고 기억하며, 직접 해보고 이해한다."
              <div style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'normal', color: 'var(--text-tertiary)' }}>
                - 공자 -
              </div>
            </blockquote>
          </div>
        </Slide>

        {/* 페이지 6: 체험 접근 전략 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>5학년 교실의 '체험' 전략</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3>디지털 체험</h3>
                <p style={{ marginBottom: 0 }}>에듀테크, AI, 코딩</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 1.jpg" 
                    alt="디지털 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>역동적 체험</h3>
                <p style={{ marginBottom: 0 }}>체육 활동 융합</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 2.jpg" 
                    alt="역동적 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>창작자 체험</h3>
                <p style={{ marginBottom: 0 }}>프로젝트 기반 학습</p>
                <div style={{ 
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="/6페이지 학생 활동 사진 3.jpg" 
                    alt="창작자 체험"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.05))'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 7: Icebreaking - AI '체험' */}
        <Slide fullWidth>
          <iframe
            src="https://sajuai-psi.vercel.app/"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            title="AI 체험 - 사주"
          />
        </Slide>

        {/* 페이지 8: 사례 1 - 우주 프로젝트 */}
        <Slide>
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2>사례 1: 우주 프로젝트</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                미리캔버스로 우주 탐험
              </h3>
            </div>
            
            <div className="space-y-10">
              <p>과학 '우주' 단원 연계. 디지털 콘텐츠 직접 제작.</p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/8페이지 사진.jpg" 
                alt="우주 프로젝트 학생 활동"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 9: 우주 프로젝트 - 도구 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>우주 프로젝트 - 사용 도구</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3>미리캔버스</h3>
                <p>인포그래픽 제작. 정보 시각화.</p>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxWidth: '450px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/9페이지 미리캔버스 작업.jpg" 
                    alt="미리캔버스 작업물"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3>놂삶앎 축제</h3>
                <p>'우리 반 우주 박람회장' 구축. 결과물 전시.</p>
                <div style={{ 
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxWidth: '450px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/9페이지 학생활동 사진.jpg" 
                    alt="우주 프로젝트 학생 활동"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 10: 우주 프로젝트 - 놂삶앎 축제 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-10">
            <div>
              <h2>우주 프로젝트 - 놂삶앎 축제</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                놂삶앎 나눔 축제: 지식의 향유
              </h3>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
              borderRadius: '0.25rem'
            }}>
              <video 
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '0.25rem',
                  backgroundColor: '#000'
                }}
              >
                <source src="/10페이지 놂삶앎 축제 우주 프로젝트.mp4" type="video/mp4" />
                영상을 재생할 수 없습니다.
              </video>
            </div>
            
            <div className="space-y-8">
              <p>
                학생이 '큐레이터'가 되어 동료 초대. 배운 지식을 직접 설명하고 공유.
              </p>
            </div>
          </div>
        </Slide>

        {/* 페이지 11: 성찰 - '고착화' */}
        <Slide>
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2>성찰: '고착화'라는 문제</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                '고착화'라는 매너리즘
              </h3>
            </div>
            
            <div className="space-y-10">
              <p>
                3년간 프로젝트 반복. '나눔 축제' 방식의 '고착화' 발생.
              </p>
            </div>
          </div>
        </Slide>

        {/* 페이지 12: '고착화'의 영향 */}
        <Slide>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2>'고착화'의 영향</h2>
            
            <blockquote style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginTop: '3rem' }}>
              "선생님, 작년에도 이거 했잖아요"
            </blockquote>
            
            <div className="space-y-10">
              <p>
                '혁신적 수업'이 '반복되는 연례행사'로 느껴지는 순간.
              </p>
            </div>
          </div>
        </Slide>

        {/* 페이지 13: 새로운 도전 - 역사 */}
        <Slide>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2>새로운 도전: 역사 '추체험' 프로젝트</h2>
            
            <div className="space-y-10">
              <p>새로운 영역: '역사'</p>
              <p>'추체험(追體驗)'이라는 핵심 개념의 발견.</p>
            </div>
          </div>
        </Slide>

        {/* 페이지 14: '체험' vs '추체험' */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>'체험' vs '추체험'</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3>체험 (體驗)</h3>
                <div className="space-y-6">
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>의미</p>
                    <p style={{ marginBottom: 0 }}>직접 겪는 경험 (예: 도자기 빚기)</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>한계</p>
                    <p style={{ marginBottom: 0 }}>과거 '체험' 불가능.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3>추체험 (追體驗)</h3>
                <div className="space-y-6">
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>의미</p>
                    <p style={{ marginBottom: 0 }}>간접적으로 겪는 경험</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>핵심</p>
                    <p style={{ marginBottom: 0 }}>상상력, 감정 이입, 내면적 재구성.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 15: 기존의 추체험 기법 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>교과서 속 전통적 '추체험' 기법</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { text: '편지 쓰기', emoji: '✉️' },
                { text: '역할극', emoji: '🎭' },
                { text: '가상 일기', emoji: '📔' },
                { text: '역사 신문', emoji: '📰' },
                { text: '시청각 자료', emoji: '🎬' },
                { text: 'VR/AR', emoji: '🥽' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3 text-center">
                  <p style={{ 
                    fontWeight: 500,
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    marginBottom: 0 
                  }}>
                    ({idx + 1}) {item.text}
                  </p>
                  <div style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    lineHeight: 1
                  }}>
                    {item.emoji}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 페이지 16: 새로운 시도 (Two-Track) */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <h2>'고착화'를 넘기 위한 새로운 시도</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3>시도 1</h3>
                <p style={{ fontWeight: 500 }}>디지털 추체험</p>
                <p style={{ marginBottom: 0 }}>(AI 코딩 활용)</p>
              </div>
              
              <div className="space-y-6">
                <h3>시도 2</h3>
                <p style={{ fontWeight: 500 }}>예체능 융합 추체험</p>
                <p style={{ marginBottom: 0 }}>(체육, 미술 활용)</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 17: 추체험 ① 선사시대 및 고조선 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <h2>추체험 ① 선사시대 및 고조선</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                선사시대 생활 모습 체험과 빗살무늬토기 만들기
              </h3>
            </div>
            
            <div className="space-y-10">
              <p>선사시대 생활 모습 체험</p>
              <p>빗살무늬토기 만들기</p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/신석기 빗살무늬토기 만들기.jpg" 
                alt="빗살무늬토기 만들기"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 18: 추체험 ① 선사시대 및 고조선 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>추체험 ① 선사시대 및 고조선</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: 0 }}>
                건국 신화와 국가 형성
              </h3>
            </div>
            
            <div>
              <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 500 }}>[디지털]</span> 전쟁 보드게임: 건국 신화 및 당시의 사회 모습 이해
              </p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: 'calc(100vh - 280px)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.25rem',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://side-project-ysda.vercel.app/"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="고조선 전쟁 보드게임"
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 19: 추체험 ② 삼국/남북국시대 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2>추체험 ② 삼국시대 & 남북국시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                영토 확장과 문화의 힘
              </h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>[신체]</p>
                <p style={{ marginBottom: 0 }}>
                  삼국시대 피구: 3팀(고,백,신) 구성. 동맹, 배신, 영토 획득 추체험.
                </p>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/19페이지 사진.jpg" 
                  alt="삼국시대 피구 활동"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 20: 추체험 ② 삼국/남북국시대 - 예술 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-10">
            <div>
              <h2>추체험 ② 삼국시대 & 남북국시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                문화유산 경매
              </h3>
            </div>
            
            <div>
              <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>[예술]</p>
              <p>문화유산 경매: 가상 화폐로 경매하며 가치 내면화.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div style={{ 
                width: '100%',
                height: '520px',
                border: '1px solid var(--border-color)',
                borderRadius: '0.25rem',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://auction-git-main-noid3719-5451s-projects.vercel.app/"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="문화유산 경매"
                />
              </div>
              
              <div style={{ 
                width: '100%',
                height: '520px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/20페이지 삼국시대 문화유산.jpg" 
                  alt="삼국시대 문화유산"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 21: 추체험 ③ 후삼국/고려 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>추체험 ③ 후삼국시대 & 고려</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                혼란 극복과 새로운 문화
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p style={{ fontWeight: 500 }}>[신체]</p>
                <p>후삼국 통일 피구: 왕건의 통일 과정 추체험.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div style={{ 
                  width: '100%',
                  height: '380px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/21페이지 후삼국 피구 및 장군대결.jpg" 
                    alt="후삼국 통일 피구"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
                
                <div style={{ 
                  width: '100%',
                  height: '380px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                  borderRadius: '0.25rem'
                }}>
                  <video 
                    controls
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '0.25rem',
                      backgroundColor: '#000'
                    }}
                  >
                    <source src="/21페이지 후삼국 피구 및 장군대결.mp4" type="video/mp4" />
                    영상을 재생할 수 없습니다.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 22: 추체험 ③ 후삼국/고려 - 고려말 피구 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>추체험 ③ 후삼국시대 & 고려</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                고려 말 혼란과 조선의 건국
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p style={{ fontWeight: 500 }}>[신체]</p>
                <p>고려말 피구: 권문세족과 신진사대부의 대립, 이성계의 조선 건국 추체험.</p>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/22페이지 고려 말 피구.jpg" 
                  alt="고려말 피구"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 23: 추체험 ③ 후삼국/고려 - 예술 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>추체험 ③ 후삼국시대 & 고려</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                고려청자 상감기법 체험
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p style={{ fontWeight: 500 }}>[예술]</p>
                <p>고려청자 상감기법 체험: 원리 이해 및 디자인.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div style={{ 
                  width: '100%',
                  height: '420px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/고려 상감청자 만들기.jpg" 
                    alt="고려 상감청자 만들기"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
                
                <div style={{ 
                  width: '100%',
                  height: '420px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="/고려 상감청자 완성본.jpg" 
                    alt="고려 상감청자 완성본"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 24: 추체험 ④ 조선시대 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <h2>추체험 ④ 조선시대</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                에듀테크 · 예체능 연계 추체험
              </h3>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p style={{ fontWeight: 500 }}>[핵심]</p>
                <p>학급운영플랫폼 '상태창'으로 학습 상태를 공유하며 진행하는 에듀테크형 추체험</p>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '420px',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://statup.kr/student-login"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="상태창 로그인"
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 25: 추체험 ④ 조선시대 - 융합 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div>
              <h2>추체험 ④ 조선시대 - 융합</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                예체능 기반 역사 뮤지컬 프로젝트
              </h3>
            </div>
            
            <div className="space-y-4">
              <p style={{ fontWeight: 500 }}>[융합]</p>
              <p>역사 뮤지컬 수업: 팀별 대본 작성 · 안무 제작 · 무대 연출</p>
            </div>
            
            <div style={{ 
              width: '100%',
              height: '420px',
              border: '1px solid var(--border-color)',
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.youtube.com/embed/5RuAqQmLyKU?feature=shared"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="역사 뮤지컬 수업 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Slide>

        {/* 페이지 26: 디지털 추체험 게임 */}
        <Slide>
          <div className="max-w-6xl mx-auto">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.3fr 0.7fr', 
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* 왼쪽: 제목 및 내용 */}
              <div className="space-y-12">
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)' }}>디지털 추체험: {'<'}다시 쓰는 조선왕조실록{'>'}</h2>
                  <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                    교사 제작 '선택형 역사 게임(CYOA)'
                  </h3>
                </div>
                
                <div className="space-y-10">
                  <p style={{ fontWeight: 500 }}>게임 방식:</p>
                  
                  <div className="space-y-6">
                    <p>• 학생, 역사적 인물(이방원 등) 되기.</p>
                    <p>• 역사적 분기점에서 '선택지' 마주.</p>
                    <p>• 선택에 따른 실제/가상 결과 확인.</p>
                  </div>
                </div>
              </div>
              
              {/* 오른쪽: 모바일 형태 임베딩 */}
              <div style={{ 
                width: '100%',
                maxWidth: '550px',
                height: '70vh',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <iframe
                  src="https://history-rewrite2.vercel.app/"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="다시 쓰는 조선왕조실록 2"
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 27: '선택형 게임'의 이유 */}
        <Slide>
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2>왜 '선택형 게임'인가?</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                '결과' 암기에서 '선택'의 추체험으로
              </h3>
            </div>
            
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>기존</p>
                  <p style={{ marginBottom: 0 }}>
                    "이방원의 정몽주 암살." (결과 암기)
                  </p>
                </div>
                
                <div>
                  <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>게임</p>
                  <p style={{ marginBottom: 0 }}>
                    선택까지의 '고뇌'와 '무게' 추체험.
          </p>
        </div>
              </div>
              
              <div style={{ 
                width: '100%',
                height: '55vh',
                border: '1px solid var(--border-color)',
              }}>
                <iframe
                  src="https://history-rewrite.vercel.app/"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="다시 쓰는 조선왕조실록"
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 28: 교사의 도구: AI 코딩 시연 */}
        <Slide>
          <div className="max-w-6xl mx-auto">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.2fr 1fr', 
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* 왼쪽: 제목 및 내용 */}
              <div className="space-y-12">
                <h2>교사의 도구: AI 코딩 시연</h2>
                
                <div className="space-y-8">
                  <p style={{ fontWeight: 500, fontSize: '1.1rem' }}>프로세스</p>
                  
                  <div className="space-y-6" style={{ position: 'relative' }}>
                    {/* 1단계 */}
                    <div style={{
                      padding: '1.5rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      backgroundColor: 'var(--bg-color)',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          backgroundColor: 'var(--text-color)',
                          color: 'var(--bg-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem'
                        }}>1</div>
                        <p style={{ fontWeight: 700, margin: 0, fontSize: '1.05rem' }}>교사</p>
                      </div>
                      <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        역사 수업 내용을 바탕으로 게임 시나리오와 선택지 분기점 설계
                      </p>
                    </div>
                    
                    {/* 화살표 */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '2rem',
                      color: 'var(--text-secondary)',
                      fontSize: '1.5rem'
                    }}>↓</div>
                    
                    {/* 2단계 */}
                    <div style={{
                      padding: '1.5rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      backgroundColor: 'var(--bg-color)',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          backgroundColor: 'var(--text-color)',
                          color: 'var(--bg-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem'
                        }}>2</div>
                        <p style={{ fontWeight: 700, margin: 0, fontSize: '1.05rem' }}>AI</p>
                      </div>
                      <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        교사가 설계한 시나리오를 바탕으로 게임 코드 초안 자동 생성
                      </p>
                    </div>
                    
                    {/* 화살표 */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '2rem',
                      color: 'var(--text-secondary)',
                      fontSize: '1.5rem'
                    }}>↓</div>
                    
                    {/* 3단계 */}
                    <div style={{
                      padding: '1.5rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      backgroundColor: 'var(--bg-color)',
                      position: 'relative'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          backgroundColor: 'var(--text-color)',
                          color: 'var(--bg-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem'
                        }}>3</div>
                        <p style={{ fontWeight: 700, margin: 0, fontSize: '1.05rem' }}>교사 + AI</p>
                      </div>
                      <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        생성된 코드를 함께 검토하고 수정하여 완성도 높은 게임으로 발전
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 오른쪽: 이미지 */}
              <div style={{ 
                width: '100%',
                height: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/27페이지 사진.png" 
                  alt="AI 코딩 시연"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 29: 바이브 코딩 실습 가이드 */}
        <Slide>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2>바이브 코딩 실습: 진진가 게임 웹앱</h2>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                Gemini + Markdown 문서에서 웹페이지 만들기
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <p style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>STEP 1 · 환경 준비</p>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: 1.6 }}>
                  <li>바이브코딩 접속 → Gemini 도구 선택</li>
                  <li>"제미나이가 쓴 마크다운 문서에서 웹페이지 만들기" 기능 실행</li>
                  <li>모던 스타일 템플릿 선택 (다크/라이트 자동 대응)</li>
                </ul>
              </div>
              
              <div style={{
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <p style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>STEP 2 · 프롬프트 입력</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  아래 PRD 프롬프트를 그대로 붙여넣고, "모던 UI" 조건을 강조
                </p>
                <pre style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  whiteSpace: 'pre-wrap',
                  fontSize: '0.85rem',
                  lineHeight: 1.4
                }}>
새학기 첫 시간에 교사 소개를 위한 진진가 게임 웹애플리케이션을 만들려고 해.
이름: 조건형
보기1: 지금 나이는 28살이다.(진짜)
보기2: 지금 여자친구가 있다.(가짜)
보기3: 5학년을 3년 연속 맡고 있다.(진짜)
디자인: 모던
                </pre>
              </div>
              
              <div style={{
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <p style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>STEP 3 · 생성 & 미세 조정</p>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: 1.6 }}>
                  <li>제미나이가 생성한 PRD → 즉시 HTML/CSS/JS 변환</li>
                  <li>정답/오답 토글 로직 확인, 색상 대비·폰트 수정</li>
                  <li>게임 진행 안내 문구 및 버튼 레이블 국문화</li>
                </ul>
              </div>
              
              <div style={{
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <p style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>STEP 4 · 배포 & 수업 적용</p>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: 1.6 }}>
                  <li>바이브코딩 미리보기로 반 학생과 즉시 공유</li>
                  <li>앱 링크를 학급 LMS / QR 코드에 탑재</li>
                  <li>학생들이 진짜·가짜 선택 → 실시간 통계로 아이스브레이킹</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* 페이지 30: Q&A */}
        <Slide>
          <div className="h-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1>감사합니다</h1>
            <h2 style={{ marginBottom: 0, fontWeight: 400 }}>Q&amp;A</h2>
          </div>
        </Slide>
      </SlideContainer>
    </>
  );
}
