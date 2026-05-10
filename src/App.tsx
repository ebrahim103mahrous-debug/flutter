/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Languages, 
  RotateCcw, 
  Shuffle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Info,
  Timer,
  Settings2,
  ChevronRight,
  Home as HomeIcon,
  Play
} from 'lucide-react';
import { QUESTIONS } from './data/questions';
import { Question } from './types';

type Screen = 'home' | 'quiz' | 'custom-settings' | 'result' | 'stats';
type Tab = 'home' | 'stats';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [screen, setScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // Default 10 mins
  
  // Tracking History
  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [totalQuizzes, setTotalQuizzes] = useState(0);

  // Custom Settings State
  const [customCount, setCustomCount] = useState(10);
  const [customMins, setCustomMins] = useState(10);

  const isAr = lang === 'ar';

  // Timer Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (screen === 'quiz' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && screen === 'quiz') {
      setScreen('result');
    }
    return () => clearInterval(interval);
  }, [screen, timeLeft]);

  const prepareQuestions = (rawQuestions: Question[]) => {
    return rawQuestions.map(q => {
      // Find the original correct option text to keep track of it
      const originalCorrectOption = q.options.find(o => o.key === q.correctAnswer);
      
      // Shuffle options text so they change position
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      
      // Map to new keys A, B, C, D in strict order
      const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
      const rekeyedOptions = shuffledOptions.map((opt, index) => ({
        ...opt,
        key: keys[index] // Reset the key to A, B, C, or D
      }));
      
      // Find which of the new keys (A, B, C, D) points to the text that was originally correct
      const newCorrectKey = rekeyedOptions.find(o => 
        o.text === originalCorrectOption?.text && o.textAr === originalCorrectOption?.textAr
      )?.key || q.correctAnswer;
      
      return {
        ...q,
        options: rekeyedOptions,
        correctAnswer: newCorrectKey
      };
    });
  };

  const startSequentialSet = (setNum: number) => {
    const start = (setNum - 1) * 10;
    const end = start + 10;
    const setQuestions = prepareQuestions(QUESTIONS.slice(start, end));
    
    setQuizQuestions(setQuestions);
    setTotalQuizzes(prev => prev + 1);
    initQuiz(600);
  };

  const startRandomQuiz = (count: number = 10, timeMins: number = 10) => {
    const shuffled = [...QUESTIONS]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(count, QUESTIONS.length));
    
    setQuizQuestions(prepareQuestions(shuffled));
    setTotalQuizzes(prev => prev + 1);
    initQuiz(timeMins * 60);
  };

  const initQuiz = (time: number) => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(time);
    setScreen('quiz');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswer = (key: 'A' | 'B' | 'C' | 'D') => {
    if (selectedAnswer) return;
    const currentQ = quizQuestions[currentIndex];
    setSelectedAnswer(key);
    setShowExplanation(true);
    if (key === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      // Add to incorrect questions if not already there
      if (!incorrectQuestions.find(q => q.id === currentQ.id)) {
        setIncorrectQuestions(prev => [currentQ, ...prev]);
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setScreen('result');
    }
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const goHome = () => {
    setScreen('home');
    setActiveTab('home');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.98 }
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8 pb-24 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        {/* Global Navbar */}
        <div className="flex items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 cursor-pointer" onClick={goHome}>
            <div className="p-2 bg-blue-600 rounded-lg">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight">Flutter Quiz Master</h1>
            </div>
          </div>
          
          <button 
            id="btn-lang-toggle"
            onClick={toggleLang}
            className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-xl transition-all font-black text-sm"
          >
            <Languages className="w-4 h-4" />
            <span>{isAr ? "English" : "عربي"}</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {screen === 'home' && activeTab === 'home' && (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Hero Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">{isAr ? "اختر نمط الاختبار" : "Select Quiz Mode"}</h2>
                  <p className="text-blue-100 opacity-90 max-w-xl text-lg leading-relaxed">
                    {isAr 
                      ? "اختبر معلوماتك في فلاتر. اختر أحد المجموعات الجاهزة المكونة من 10 أسئلة أو صمم اختبارك الخاص." 
                      : "Test your Flutter knowledge. Choose one of the 10-question structured sets or design your own."}
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <BrainCircuit size={200} />
                </div>
              </div>

              {/* Quiz Sets 1-5 */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    id={`btn-set-${num}`}
                    onClick={() => startSequentialSet(num)}
                    className="w-full flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {num}
                      </div>
                      <div className="text-start">
                        <div className="font-bold text-slate-800">{isAr ? `المجموعة رقم ${num}` : `Quiz Set #${num}`}</div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                          {isAr ? `الأسئلة ${((num-1)*10)+1}-${num*10}` : `Questions ${((num-1)*10)+1}-${num*10}`}
                        </div>
                      </div>
                    </div>
                    <div className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
                      <ChevronRight className={`w-5 h-5 text-slate-400 group-hover:text-blue-600 ${isAr ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Session & Info */}
              <div className="space-y-6">
                <button
                  id="btn-custom-quiz"
                  onClick={() => setScreen('custom-settings')}
                  className="w-full flex flex-col items-center justify-center p-10 bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-3xl hover:border-indigo-400 hover:bg-indigo-100 transition-all group"
                >
                  <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Settings2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{isAr ? "اختبار مخصص (رقم 6)" : "Custom Quiz (#6)"}</h3>
                  <p className="text-indigo-700/70 text-sm font-medium text-center">
                    {isAr ? "حدد عدد الأسئلة والوقت بنفسك لاختبار عشوائي" : "Set your own questions count and time for a random test"}
                  </p>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'stats' && screen === 'home' && (
            <motion.div
              key="stats"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-start">
                  <h2 className="text-2xl font-black mb-2">{isAr ? "سجل الأداء" : "Performance Stats"}</h2>
                  <p className="text-slate-500 font-bold">{isAr ? "مراجعة الأسئلة التي تعثرت فيها" : "Review questions you've failed previously"}</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-50 p-4 rounded-2xl text-center min-w-[120px]">
                    <div className="text-2xl font-black text-red-600">{incorrectQuestions.length}</div>
                    <div className="text-xs font-black text-red-400 uppercase">{isAr ? "أخطاء" : "Mistakes"}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-2xl text-center min-w-[120px]">
                    <div className="text-2xl font-black text-blue-600">{totalQuizzes}</div>
                    <div className="text-xs font-black text-blue-400 uppercase">{isAr ? "اختبارات" : "Quizzes"}</div>
                  </div>
                </div>
              </div>

              {incorrectQuestions.length > 0 ? (
                <div className="space-y-4">
                  {incorrectQuestions.map(q => (
                    <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-start">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="font-bold text-slate-800 text-lg leading-relaxed">{q.question}</h4>
                        <span className="shrink-0 bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs font-black">ID: {q.id}</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl mb-4 border-r-4 border-blue-500">
                        <p className="font-bold text-slate-600">{q.questionAr}</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="text-xs font-black text-green-600 uppercase mb-1">{isAr ? "الإجابة الصحيحة" : "Correct Answer"}</div>
                        <p className="font-bold text-green-900">{q.options.find(o => o.key === q.correctAnswer)?.text} ({q.options.find(o => o.key === q.correctAnswer)?.textAr})</p>
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={() => setIncorrectQuestions([])}
                    className="w-full py-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-colors"
                  >
                    {isAr ? "مسح سجل الأخطاء" : "Clear Mistake History"}
                  </button>
                </div>
              ) : (
                <div className="bg-white p-16 rounded-3xl border-2 border-dashed border-slate-100 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-slate-200" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-400">{isAr ? "لا توجد أخطاء مسجلة حالياً" : "No mistakes recorded yet"}</h3>
                </div>
              )}
            </motion.div>
          )}

          {screen === 'custom-settings' && (
            <motion.div
              key="custom-settings"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-md mx-auto"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Settings2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{isAr ? "إعدادات الاختبار" : "Quiz Settings"}</h2>
                </div>

                <div className="space-y-8 mb-10">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-bold text-slate-700">{isAr ? "عدد الأسئلة" : "Number of Questions"}</label>
                      <input 
                        type="number" 
                        min="1" 
                        max={QUESTIONS.length}
                        value={customCount}
                        onChange={(e) => setCustomCount(Math.min(QUESTIONS.length, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="w-20 bg-slate-100 px-3 py-2 rounded-xl font-black text-blue-600 text-center focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <input 
                      type="range" min="5" max={QUESTIONS.length} step="5"
                      value={customCount}
                      onChange={(e) => setCustomCount(parseInt(e.target.value))}
                      className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                      <span>5</span>
                      <span>MAX: {QUESTIONS.length}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-bold text-slate-700">{isAr ? "المدة (بالدقائق)" : "Time Limit (Minutes)"}</label>
                      <input 
                        type="number" 
                        min="1" 
                        max="120"
                        value={customMins}
                        onChange={(e) => setCustomMins(Math.min(120, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="w-20 bg-slate-100 px-3 py-2 rounded-xl font-black text-indigo-600 text-center focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    <input 
                      type="range" min="2" max="60" step="1"
                      value={customMins}
                      onChange={(e) => setCustomMins(parseInt(e.target.value))}
                      className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                      <span>2m</span>
                      <span>60m</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => startRandomQuiz(customCount, customMins)}
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    {isAr ? "ابدأ الاختبار المخصص" : "Start Custom Quiz"}
                  </button>
                  <button
                    onClick={goHome}
                    className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all font-mono"
                  >
                    {isAr ? "إلغاء وتراجع" : "Cancel & Go Back"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {screen === 'quiz' && quizQuestions[currentIndex] && (
            <motion.div
              key="quiz"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100 border-t-8 border-t-blue-600"
            >
              {/* Header Info */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm">
                    {isAr ? `سؤال ${currentIndex + 1} / ${quizQuestions.length}` : `Q${currentIndex + 1} / ${quizQuestions.length}`}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{isAr ? `النقاط: ${score}` : `Score: ${score}`}</span>
                  </div>
                </div>
                
                <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl font-bold shadow-sm ${timeLeft < 60 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-900 text-white'}`}>
                  <Timer className="w-4 h-4" />
                  <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-10 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-800">
                  {quizQuestions[currentIndex].question}
                </h2>
                <div className="p-4 bg-slate-50 rounded-2xl border-r-4 border-blue-500">
                  <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed">
                    <span className="text-blue-600 font-black ml-2">ترجمة السؤال:</span>
                    {quizQuestions[currentIndex].questionAr}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {quizQuestions[currentIndex].options.map((option) => {
                  const isCorrect = option.key === quizQuestions[currentIndex].correctAnswer;
                  const isSelected = selectedAnswer === option.key;
                  
                  let buttonStyle = "border-slate-100 hover:border-blue-400 hover:bg-blue-50/50";
                  if (selectedAnswer) {
                    if (isCorrect) buttonStyle = "bg-green-50 border-green-500 scale-[1.01] shadow-md shadow-green-100";
                    else if (isSelected) buttonStyle = "bg-red-50 border-red-500 scale-[1.01] shadow-md shadow-red-100";
                    else buttonStyle = "opacity-40 grayscale-[0.5]";
                  }

                  return (
                    <button
                      key={option.key}
                      onClick={() => handleAnswer(option.key)}
                      disabled={!!selectedAnswer}
                      className={`flex items-start gap-5 p-5 rounded-3xl border-2 transition-all text-start group relative ${buttonStyle}`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                        {option.key}
                      </div>
                      <div className="flex-1 pr-6">
                        <span className="text-base md:text-lg font-bold text-slate-800">
                          {option.text}
                        </span>
                        <span className="text-base md:text-lg font-bold text-blue-600 mx-2">
                          ({option.textAr})
                        </span>
                      </div>
                      {selectedAnswer && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />}
                      {selectedAnswer && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1.5" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanations */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-slate-50/80 rounded-3xl border border-slate-100 mb-8 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-blue-600 font-black text-xs uppercase tracking-widest">
                          <Info className="w-4 h-4" />
                          <span>شرح مفصل للسؤال</span>
                        </div>
                        <p className="text-base md:text-lg text-slate-700 font-bold leading-relaxed">
                          {quizQuestions[currentIndex].explanationDetailsAr}
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-2 mb-3 text-green-600 font-black text-xs uppercase tracking-widest">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>شرح مفصل للإجابة</span>
                        </div>
                        <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
                          {quizQuestions[currentIndex].explanationAnswerAr}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      id="btn-confirm-next"
                      onClick={nextQuestion}
                      className="w-full h-16 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200"
                    >
                      {currentIndex + 1 === quizQuestions.length ? (isAr ? "عرض النتيجة" : "Show Results") : (isAr ? "السؤال التالي" : "Next Question")}
                      <ArrowRight className={`w-6 h-6 ${isAr ? 'rotate-180' : ''}`} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {screen === 'result' && (
            <motion.div
              key="result"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 text-center max-w-xl mx-auto"
            >
              <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 ${score / quizQuestions.length >= 0.7 ? 'bg-green-100' : 'bg-red-100'}`}>
                {score / quizQuestions.length >= 0.7 ? (
                  <CheckCircle2 className="w-14 h-14 text-green-600" />
                ) : (
                  <RotateCcw className="w-14 h-14 text-red-600" />
                )}
              </div>
              
              <h2 className="text-4xl font-black mb-2 text-slate-900">{isAr ? "نتيجتك النهائية" : "Your Results"}</h2>
              
              {timeLeft === 0 && (
                <div className="bg-red-50 text-red-600 px-6 py-2 rounded-full text-sm font-black w-fit mx-auto mb-6 flex items-center gap-2">
                   <Timer className="w-4 h-4" />
                   {isAr ? "انتهى الوقت المسموح!" : "Time's Up!"}
                </div>
              )}
              
              <p className="text-slate-500 mb-10 font-bold text-lg">
                {isAr 
                  ? `أحرزت ${score} نقطة من أصل ${quizQuestions.length}.` 
                  : `You scored ${score} out of ${quizQuestions.length}.`}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-3xl font-black text-blue-600">{Math.round((score / quizQuestions.length) * 100)}%</div>
                  <div className="text-xs text-slate-400 font-black uppercase tracking-widest mt-1">{isAr ? "النسبة" : "Percentage"}</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-3xl font-black text-slate-900">{score}/{quizQuestions.length}</div>
                  <div className="text-xs text-slate-400 font-black uppercase tracking-widest mt-1">{isAr ? "الدرجة" : "Score"}</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  id="btn-play-again"
                  onClick={() => startRandomQuiz(quizQuestions.length)}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  {isAr ? "محاولة أخرى" : "Try Again"}
                </button>
                <button
                  onClick={goHome}
                  className="w-full py-5 bg-slate-100 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
                >
                  <HomeIcon className="w-5 h-5" />
                  {isAr ? "القائمة الرئيسية" : "Main Menu"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      {screen === 'home' && (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-blue-600 scale-110' : 'text-slate-400'}`}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-tighter">{isAr ? "الرئيسية" : "Home"}</span>
            {activeTab === 'home' && <motion.div layoutId="nav-dot" className="w-1 h-1 bg-blue-600 rounded-full mt-1" />}
          </button>

          <button 
            onClick={() => startRandomQuiz()}
            className="flex flex-col items-center justify-center -translate-y-6 w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
          >
            <Shuffle className="w-7 h-7" />
          </button>

          <button 
            onClick={() => setActiveTab('stats')}
            className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'stats' ? 'text-blue-600 scale-110' : 'text-slate-400'}`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-tighter">{isAr ? "إحصائياتي" : "Stats"}</span>
            {activeTab === 'stats' && <motion.div layoutId="nav-dot" className="w-1 h-1 bg-blue-600 rounded-full mt-1" />}
          </button>
        </div>
      )}
    </div>
  );
}


