import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the primary programming language used for Flutter development?",
    questionAr: "ما هي لغة البرمجة الأساسية المستخدمة في تطوير تطبيقات فلاتر (Flutter)؟",
    options: [
      { key: 'A', text: "Java", textAr: "جافا" },
      { key: 'B', text: "Dart", textAr: "دارت" },
      { key: 'C', text: "Kotlin", textAr: "كوتلن" },
      { key: 'D', text: "Swift", textAr: "سويفت" }
    ],
    correctAnswer: 'B',
    explanationDetails: "This question aims to identify the official and only programming language in which source code is written to build Flutter app interfaces and logic.",
    explanationDetailsAr: "يهدف هذا السؤال إلى التعرف على لغة البرمجة الرسمية والوحيدة التي يُكتب بها الكود المصدري لبناء واجهات ومنطق تطبيقات فلاتر.",
    explanationAnswer: "The answer is 'Dart'. It is an open-source programming language developed by Google, specifically chosen for Flutter because it supports Ahead-of-Time (AOT) compilation for high performance and Just-in-Time (JIT) compilation for features like Hot Reload.",
    explanationAnswerAr: "الإجابة هي 'Dart' (دارت). هي لغة برمجة مفتوحة المصدر طورتها شركة جوجل، وتم اختيارها خصيصاً لفلاتر لأنها تدعم تجميع الكود مسبقاً (AOT) ليعمل بأداء عالي جداً، كما تدعم التجميع الفوري (JIT) لتوفير ميزة التحميل السريع (Hot Reload) أثناء التطوير."
  },
  {
    id: 2,
    question: "Which widget is used when the UI doesn't need to change during the app's lifecycle?",
    questionAr: "ما هو العنصر (Widget) المستخدم عندما لا تحتاج واجهة المستخدم إلى التغيير خلال دورة حياة التطبيق؟",
    options: [
      { key: 'A', text: "StatefulWidget", textAr: "ويدجت ذو حالة / متغير" },
      { key: 'B', text: "StatelessWidget", textAr: "ويدجت عديم الحالة / ثابت" },
      { key: 'C', text: "InheritedWidget", textAr: "ويدجت موروث" },
      { key: 'D', text: "State", textAr: "حالة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "In Flutter, everything is a widget. This question asks about the type of widget to use if the screen or visual component is just a static shape and won't change based on user interaction or data.",
    explanationDetailsAr: "في فلاتر، كل شيء عبارة عن 'ويدجت'. يسأل هذا السؤال عن نوع الويدجت الذي يجب استخدامه إذا كانت الشاشة أو المكون المرئي مجرد شكل ثابت ولن يتغير بناءً على تفاعل المستخدم أو البيانات.",
    explanationAnswer: "The answer is 'StatelessWidget'. This widget is immutable, meaning once drawn, it does not hold any changing state that requires redrawing, making it lightweight and fast.",
    explanationAnswerAr: "الإجابة هي 'StatelessWidget'. هذا الويدجت يكون 'غير قابل للتغيير' (Immutable)، مما يعني أنه بمجرد رسمه على الشاشة، فإنه لا يحتفظ بأي بيانات متغيرة (State) تتطلب إعادة رسمه، مما يجعله خفيفاً وسريعاً في الأداء."
  },
  {
    id: 3,
    question: "Which function is responsible for updating the UI in a StatefulWidget?",
    questionAr: "ما هي الدالة المسؤولة عن تحديث واجهة المستخدم في العنصر المتغير (StatefulWidget)؟",
    options: [
      { key: 'A', text: "build()", textAr: "دالة البناء" },
      { key: 'B', text: "update()", textAr: "دالة التحديث" },
      { key: 'C', text: "setState()", textAr: "دالة تعيين الحالة" },
      { key: 'D', text: "initState()", textAr: "دالة تهيئة الحالة البدئية" }
    ],
    correctAnswer: 'C',
    explanationDetails: "When using a StatefulWidget, you need a way to notify the system that a change has occurred and the screen needs to reflect that change.",
    explanationDetailsAr: "عندما تستخدم 'ويدجت متغير'، فإنك تحتاج إلى طريقة لإخبار النظام بأن هناك تغييراً قد حدث ويجب تحديث الشاشة لتعكس هذا التغيير.",
    explanationAnswer: "Calling setState() notifies the framework that the internal state has changed, prompting Flutter to call the build() method again to redraw the UI with updated data.",
    explanationAnswerAr: "عند استدعاء هذه الدالة، فإنها تخطر إطار عمل فلاتر بأن الحالة الداخلية للويدجت قد تغيرت، مما يدفع فلاتر لاستدعاء الدالة build() مرة أخرى وإعادة رسم واجهة المستخدم بالبيانات الجديدة المحدثة."
  },
  {
    id: 4,
    question: "Where do you define project dependencies and assets in a Flutter project?",
    questionAr: "أين تقوم بتعريف تبعيات المشروع (المكتبات الخارجية) والملفات المرفقة في مشروع فلاتر؟",
    options: [
      { key: 'A', text: "main.dart", textAr: "ملف main.dart" },
      { key: 'B', text: "pubspec.yaml", textAr: "ملف pubspec.yaml" },
      { key: 'C', text: "index.html", textAr: "ملف index.html" },
      { key: 'D', text: "config.json", textAr: "ملف config.json" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Any software project needs general configuration, libraries, and asset paths like images and fonts. This question asks for that file in Flutter.",
    explanationDetailsAr: "أي مشروع برمجي يحتاج إلى إعدادات عامة ومكتبات جاهزة تم برمجتها مسبقاً، بالإضافة إلى مسارات الصور والملفات الصوتية.",
    explanationAnswer: "pubspec.yaml is the heart of a Dart/Flutter project's configuration. It's written in YAML and used to add libraries, specify app version, and define asset and font paths.",
    explanationAnswerAr: "الإجابة هي pubspec.yaml. هذا الملف هو القلب النابض لإعدادات مشروع دارت/فلاتر. يُكتب بصيغة YAML، ويُستخدم لإضافة المكتبات، وتحديد إصدار التطبيق، وتعريف مسارات الصور والخطوط."
  },
  {
    id: 5,
    question: "Which widget provides the basic visual structure (AppBar, Drawer, SnackBar)?",
    questionAr: "ما هو العنصر (Widget) الذي يوفر الهيكل البصري الأساسي للتطبيق؟",
    options: [
      { key: 'A', text: "Container", textAr: "حاوية" },
      { key: 'B', text: "Scaffold", textAr: "هيكل الواجهة / السقّالة" },
      { key: 'C', text: "MaterialApp", textAr: "تطبيق تصميم ماتيريال" },
      { key: 'D', text: "Column", textAr: "عمود" }
    ],
    correctAnswer: 'B',
    explanationDetails: "This question asks about the ready-made component in Flutter that acts as a template for standard screens.",
    explanationDetailsAr: "يسأل السؤال عن العنصر الجاهز في فلاتر الذي يعمل كـ 'قالب' لتصميم الشاشات المعتادة.",
    explanationAnswer: "Scaffold provides a structure for implementing Google's Material Design. It simplifies adding elements like AppBar, Drawer, and BottomNavigationBar.",
    explanationAnswerAr: "الإجابة هي Scaffold. وهي توفر هيكلاً متكاملاً لتطبيق لغة تصميم 'Material Design' الخاصة بجوجل. هذا الويدجت يسهل عليك إضافة عناصر مثل AppBar و Drawer."
  },
  {
    id: 6,
    question: "Which property is used in a Column to align children vertically?",
    questionAr: "ما هي الخاصية المستخدمة في ويدجت العمود (Column) لمحاذاة العناصر الفرعية عمودياً؟",
    options: [
      { key: 'A', text: "crossAxisAlignment", textAr: "محاذاة المحور العرضي" },
      { key: 'B', text: "mainAxisAlignment", textAr: "محاذاة المحور الرئيسي" },
      { key: 'C', text: "stretch", textAr: "تمدد" },
      { key: 'D', text: "alignment", textAr: "محاذاة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "A Column stacks widgets one above another. This question is about the property that controls how they are distributed and centered from top to bottom.",
    explanationDetailsAr: "ويدجت الـ Column يقوم بترتيب العناصر تحته فوق بعضها البعض. يسأل السؤال عن الخاصية البرمجية التي تتحكم في كيفية توزيع العناصر عمودياً.",
    explanationAnswer: "In a Column, the Main Axis is vertical. Therefore, mainAxisAlignment is used to arrange children vertically (e.g., center them or spread them apart).",
    explanationAnswerAr: "الإجابة هي mainAxisAlignment. في العمود، المحور الرئيسي هو المحور العمودي. لذلك لترتيب العناصر بشكل عمودي يتم استخدام هذه الخاصية."
  },
  {
    id: 7,
    question: "What is the main difference between 'Hot Reload' and 'Hot Restart'?",
    questionAr: "ما هو الفرق الرئيسي بين 'التحميل السريع' (Hot Reload) و 'إعادة التشغيل السريع' (Hot Restart)؟",
    options: [
      { key: 'A', text: "Hot Reload maintains app state, Hot Restart resets it.", textAr: "التحميل السريع يحافظ على حالة التطبيق، بينما إعادة التشغيل السريع يعيد ضبطها." },
      { key: 'B', text: "Hot Restart is faster than Hot Reload.", textAr: "إعادة التشغيل السريع أسرع من التحميل السريع." },
      { key: 'C', text: "There is no difference.", textAr: "لا يوجد فرق." },
      { key: 'D', text: "Hot Reload requires reloading libraries.", textAr: "التحميل السريع يتطلب إعادة تحميل المكتبات." }
    ],
    correctAnswer: 'A',
    explanationDetails: "This compares two powerful features in Flutter development environment, focusing on how each handles the app state when applied.",
    explanationDetailsAr: "هذا السؤال يقارن بين أقوى ميزتين في بيئة تطوير فلاتر، ويركز على كيفية تعامل كل ميزة مع حالة البيانات.",
    explanationAnswer: "Hot Reload injects code changes instantly while maintaining state. Hot Restart rebuilds the app from scratch, resetting any state.",
    explanationAnswerAr: "الميزة الكبرى لـ Hot Reload هي أنها تقوم بحقن التعديلات فوراً مع الاحتفاظ بالبيانات (State). أما Hot Restart فهي تقوم بإعادة بناء التطبيق من الصفر مما يؤدي إلى مسح الحالة الحالية."
  },
  {
    id: 8,
    question: "Which widget is used to display a long list of items efficiently?",
    questionAr: "ما هو العنصر (Widget) المستخدم لعرض قائمة طويلة من العناصر بكفاءة؟",
    options: [
      { key: 'A', text: "Column", textAr: "عمود" },
      { key: 'B', text: "ListView.builder", textAr: "باني قائمة العرض" },
      { key: 'C', text: "SingleChildScrollView", textAr: "عرض التمرير الفردي" },
      { key: 'D', text: "Row", textAr: "صف" }
    ],
    correctAnswer: 'B',
    explanationDetails: "When building apps with thousands of items, building them all at once would crash the app. This question is about the efficient solution.",
    explanationDetailsAr: "عندما يكون لديك تطبيق يعرض آلاف العناصر، فإن بناء كل هذه العناصر دفعة واحدة سيؤدي إلى انهيار التطبيق.",
    explanationAnswer: "ListView.builder uses 'Lazy Loading'. It only creates and renders items as they approach the screen during scrolling, saving memory.",
    explanationAnswerAr: "الإجابة هي ListView.builder. هذا الويدجت يعمل بآلية 'البناء الكسول' (Lazy Loading)؛ فهو لا يقوم بإنشاء عناصر القائمة إلا عندما تقترب من الظهور."
  },
  {
    id: 9,
    question: "How do you make a widget take up all remaining space in a Row or Column?",
    questionAr: "كيف تجعل عنصراً (Widget) يشغل كل المساحة المتبقية داخل صف (Row) أو عمود (Column)؟",
    options: [
      { key: 'A', text: "Wrap it with Container", textAr: "تغليفه بحاوية" },
      { key: 'B', text: "Wrap it with Expanded", textAr: "تغليفه بعنصر التمدد" },
      { key: 'C', text: "Wrap it with SizedBox", textAr: "تغليفه بصندوق أبعاد" },
      { key: 'D', text: "Use the stretch property", textAr: "استخدام خاصية التمدد" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Inside Rows and Columns, some widgets only take the space they need. This asks how to force one to fill the remaining void.",
    explanationDetailsAr: "داخل الصفوف والأعمدة، قد تأخذ بعض العناصر مساحة تعادل حجمها فقط. يبحث السؤال عن الطريقة التي نجبر بها عنصراً على التمدد.",
    explanationAnswer: "The Expanded widget calculates available space after other children take theirs and forces its child to fill that entire remaining space.",
    explanationAnswerAr: "الإجابة هي استخدام الويدجت Expanded. حيث يقوم بحساب المساحة المتاحة المتبقية ويجبر العنصر الداخلي على التمدد ليملأ هذه المساحة بالكامل."
  },
  {
    id: 10,
    question: "Which object is used to navigate between screens in Flutter?",
    questionAr: "ما هو الكائن (Object) المستخدم للتنقل بين الشاشات في فلاتر؟",
    options: [
      { key: 'A', text: "RouteManager", textAr: "مدير المسارات" },
      { key: 'B', text: "Navigator", textAr: "المُوجّه / الملاح" },
      { key: 'C', text: "ScreenChanger", textAr: "مُغيّر الشاشات" },
      { key: 'D', text: "PageController", textAr: "مُتحكم الصفحات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Mobile apps usually consist of multiple screens. This question asks about the class responsible for moving from one screen to another.",
    explanationDetailsAr: "تطبيقات الهواتف تتكون عادة من شاشات متعددة. يسأل السؤال عن الفئة المسؤولة عن عملية الانتقال من شاشة إلى أخرى.",
    explanationAnswer: "Navigator manages a stack of screen routes. You can push a new screen onto the stack or pop the current one to go back.",
    explanationAnswerAr: "الإجابة هي Navigator. هو الكائن المسؤول عن إدارة مجموعة الشاشات كـ 'مكدس' (Stack). يمكنك إضافة شاشة جديدة أو العودة للخلف."
  },
  {
    id: 11,
    question: "Which command is used to check for any issues with the Flutter installation?",
    questionAr: "ما هو الأمر المستخدم للتحقق من أي مشاكل في تثبيت فلاتر (Flutter)؟",
    options: [
      { key: 'A', text: "flutter check", textAr: "فحص فلاتر" },
      { key: 'B', text: "flutter doctor", textAr: "طبيب فلاتر" },
      { key: 'C', text: "flutter inspect", textAr: "الفحص الدقيق لفلاتر" },
      { key: 'D', text: "flutter status", textAr: "حالة فلاتر" }
    ],
    correctAnswer: 'B',
    explanationDetails: "This question asks about the command line tool to ensure your environment is set up correctly.",
    explanationDetailsAr: "يسأل هذا السؤال عن الأمر البرمجي للتأكد من أن بيئة عمل فلاتر وجميع أدواتها مثبتة بشكل صحيح.",
    explanationAnswer: "flutter doctor runs a diagnostic check of your development environment and displays a report of any missing dependencies.",
    explanationAnswerAr: "الإجابة هي flutter doctor. هذا الأمر يقوم بتشغيل فحص تشخيصي شامل لبيئة التطوير الخاصة بك، ويعرض تقريراً يوضح أي نقص."
  },
  {
    id: 12,
    question: "What is the purpose of 'MainAxisAlignment' in a Row widget?",
    questionAr: "ما هو الغرض من 'MainAxisAlignment' في ويدجت الصف (Row)؟",
    options: [
      { key: 'A', text: "To align children vertically", textAr: "لمحاذاة العناصر عمودياً" },
      { key: 'B', text: "To align children horizontally", textAr: "لمحاذاة العناصر أفقياً" },
      { key: 'C', text: "To set background color", textAr: "لتعيين لون الخلفية" },
      { key: 'D', text: "To define height", textAr: "لتحديد الارتفاع" }
    ],
    correctAnswer: 'B',
    explanationDetails: "A Row lays out its children horizontally. The Main Axis in a Row is horizontal.",
    explanationDetailsAr: "ويدجت الصف يرتب العناصر أفقياً. المحور الرئيسي في الصف هو المحور الأفقي.",
    explanationAnswer: "In a Row, MainAxisAlignment controls horizontal distribution and centering of child widgets.",
    explanationAnswerAr: "في ويدجت Row، تتحكم خاصية MainAxisAlignment في كيفية توزيع وتمركز العناصر أفقياً."
  },
  {
    id: 13,
    question: "Which widget is used for a rounded button with a shadow and background?",
    questionAr: "أي ويدجت يُستخدم لإنشاء زر ذي حواف دائرية مع ظل وخلفية؟",
    options: [
      { key: 'A', text: "FlatButton", textAr: "زر مسطح" },
      { key: 'B', text: "ElevatedButton", textAr: "زر بارز / مرتفع" },
      { key: 'C', text: "ClickableText", textAr: "نص قابل للنقر" },
      { key: 'D', text: "GestureDetector", textAr: "مكتشف الإيماءات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Standard Material Design buttons with shadow effects provide visual depth.",
    explanationDetailsAr: "أزرار تصميم الماتيريال القياسية ذات تأثيرات الظل توفر عمقاً بصرياً.",
    explanationAnswer: "ElevatedButton is the modern standard for buttons with depth and background colors in Flutter.",
    explanationAnswerAr: "الإجابة ElevatedButton. هو الزر القياسي الحديث في فلاتر الذي يأتي بظل افتراضي وخلفية ملونة."
  },
  {
    id: 14,
    question: "What does the 'flutter pub get' command do?",
    questionAr: "ماذا يفعل الأمر 'flutter pub get'؟",
    options: [
      { key: 'A', text: "It publishes your package", textAr: "ينشر حزمتك" },
      { key: 'B', text: "It downloads dependencies from pubspec.yaml", textAr: "يحمّل التبعيات من ملف pubspec.yaml" },
      { key: 'C', text: "It compiles the app", textAr: "يقوم بتجميع التطبيق" },
      { key: 'D', text: "It creates a new project", textAr: "ينشئ مشروعاً جديداً" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Handling external packages is a frequent task in Flutter development.",
    explanationDetailsAr: "التعامل مع الحزم الخارجية مهمة متكررة في تطوير فلاتر.",
    explanationAnswer: "This command reads pubspec.yaml and fetches all listed packages from pub.dev to make them available in your project.",
    explanationAnswerAr: "عند إضافة أي مكتبة إلى pubspec.yaml، يجب تشغيل هذا الأمر لجلب هذه الحزم وربطها بمشروعك."
  },
  {
    id: 15,
    question: "Which keywords are used for asynchronous operations in Dart?",
    questionAr: "ما هي الكلمات المفتاحية المستخدمة للعمليات غير المتزامنة في لغة دارت؟",
    options: [
      { key: 'A', text: "sync / wait", textAr: "تزامن / انتظار" },
      { key: 'B', text: "Future / async / await", textAr: "مستقبل / غير متزامن / انتظار" },
      { key: 'C', text: "Promise / then", textAr: "وعد / ثم" },
      { key: 'D', text: "Thread / Run", textAr: "مسار / تشغيل" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Async programming allows long-running tasks like network calls without freezing the UI.",
    explanationDetailsAr: "البرمجة غير المتزامنة تسمح بتنفيذ مهام طويلة دون تجميد شاشة التطبيق.",
    explanationAnswer: "Dart uses Future to represent future values, async for functions with async tasks, and await to pause for results.",
    explanationAnswerAr: "في Dart، تُستخدم Future للقيمة المستقبلية، و async للدالة، و await لانتظار النتيجة."
  },
  {
    id: 16,
    question: "What is the default return type of the build() method?",
    questionAr: "ما هو نوع الإرجاع الافتراضي لدالة البناء build()؟",
    options: [
      { key: 'A', text: "void", textAr: "فارغ / لا شيء" },
      { key: 'B', text: "Widget", textAr: "ويدجت / عنصر واجهة" },
      { key: 'C', text: "Context", textAr: "سياق" },
      { key: 'D', text: "State", textAr: "حالة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Every build method must return something that can be displayed on screen.",
    explanationDetailsAr: "كل دالة بناء يجب أن تعيد شيئاً يمكن عرضه على الشاشة.",
    explanationAnswer: "The build() method must return a Widget, which represents the UI structure for that component.",
    explanationAnswerAr: "كل دالة build() يجب أن تُرجع كائناً من نوع Widget، وهو يمثل ما سيراه المستخدم على الشاشة."
  },
  {
    id: 17,
    question: "Which widget allows you to stack multiple widgets on top of each other?",
    questionAr: "أي ويدجت يسمح لك بتكديس عدة عناصر فوق بعضها البعض؟",
    options: [
      { key: 'A', text: "Column", textAr: "عمود" },
      { key: 'B', text: "Stack", textAr: "مكدس" },
      { key: 'C', text: "Layer", textAr: "طبقة" },
      { key: 'D', text: "Overlay", textAr: "تراكب" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Layering widgets is essential for overlaying text on images or badges on icons.",
    explanationDetailsAr: "وضع العناصر في طبقات ضروري لتراكب النصوص على الصور أو الشعارات على الأيقونات.",
    explanationAnswer: "Stack allows children to be layered on top of each other along the Z-axis, from back to front.",
    explanationAnswerAr: "ويدجت Stack يسمح بترتيب أبنائه في طبقات فوق بعضها البعض. يتم وضع العنصر الأول في الخلفية."
  },
  {
    id: 18,
    question: "How do you define a constant evaluated at compile-time in Dart?",
    questionAr: "كيف تقوم بتعريف ثابت يتم حسابه في وقت التجميع في لغة دارت؟",
    options: [
      { key: 'A', text: "final", textAr: "نهائي" },
      { key: 'B', text: "const", textAr: "ثابت" },
      { key: 'C', text: "static", textAr: "ثابت / ساكن" },
      { key: 'D', text: "fixed", textAr: "مُثبت" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Compile-time constants offer better performance as they are prepared before runtime.",
    explanationDetailsAr: "الثوابت في وقت التجميع توفر أداء أفضل حيث يتم تجهيزها قبل تشغيل التطبيق.",
    explanationAnswer: "The 'const' keyword defines compile-time constants whose values are fixed at the time of compilation.",
    explanationAnswerAr: "الكلمة const تُستخدم لتعريف الثوابت في وقت التجميع. يجب أن تكون قيمتها معروفة عند كتابة الكود."
  },
  {
    id: 19,
    question: "Which widget is specifically used to add empty space around its child?",
    questionAr: "أي ويدجت يُستخدم خصيصاً لإضافة مساحة فارغة حول العنصر الداخلي الخاص به؟",
    options: [
      { key: 'A', text: "Margin", textAr: "هامش" },
      { key: 'B', text: "Padding", textAr: "حشوة / مسافة داخلية" },
      { key: 'C', text: "Spacer", textAr: "مُباعِد" },
      { key: 'D', text: "Align", textAr: "محاذاة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Adding gaps between content and borders prevents visual clutter.",
    explanationDetailsAr: "إضافة فجوات بين المحتوى والحواف يمنع الفوضى البصرية.",
    explanationAnswer: "The Padding widget adds specified empty space around its child to separate it from surroundings.",
    explanationAnswerAr: "ويدجت Padding هو العنصر المخصص لإضافة مساحة فارغة حول العنصر الذي بداخله."
  },
  {
    id: 20,
    question: "What is 'BuildContext' used for?",
    questionAr: "ما هو الغرض من استخدام 'BuildContext'؟",
    options: [
      { key: 'A', text: "Storing global data", textAr: "تخزين البيانات العامة" },
      { key: 'B', text: "Identifying the widget's location in the tree", textAr: "تحديد موقع الويدجت في الشجرة" },
      { key: 'C', text: "Compiling code", textAr: "ترجمة الكود" },
      { key: 'D', text: "Defining the main function", textAr: "تعريف الدالة الرئيسية" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Context is vital for widgets to know where they sit in the overall UI architecture.",
    explanationDetailsAr: "السياق حيوي للويدجتات لتعرف موقعها في معمارية واجهة المستخدم العامة.",
    explanationAnswer: "BuildContext acts as a handle to the location of a widget in the widget tree, allowing access to inherited data like themes.",
    explanationAnswerAr: "الـ BuildContext هو بمثابة محدد موقع يخبر الويدجت بمكانه الدقيق داخل شجرة الويدجتات."
  },
  {
    id: 21,
    question: "What is the entry point of every Flutter application?",
    questionAr: "ما هي نقطة الدخول (البداية) لكل تطبيق فلاتر (Flutter)؟",
    options: [
      { key: 'A', text: "runApp()", textAr: "تشغيل التطبيق" },
      { key: 'B', text: "main()", textAr: "الدالة الرئيسية" },
      { key: 'C', text: "startApp()", textAr: "بدء التطبيق" },
      { key: 'D', text: "initState()", textAr: "تهيئة الحالة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Every computer program needs a specific starting point where execution begins.",
    explanationDetailsAr: "كل برنامج كمبيوتر يحتاج لنقطة بداية محددة يبدأ المترجم بتنفيذ الكود منها.",
    explanationAnswer: "In Dart and Flutter, the main() function is the mandatory starting point. Inside it, runApp() is typically called to launch the UI.",
    explanationAnswerAr: "في لغة دارت وفلاتر، دالة main() هي نقطة البداية الإلزامية. وبداخلها يتم استدعاء runApp() لعرض واجهة المستخدم."
  },
  {
    id: 22,
    question: "Which property of a Container is used for borders and rounded corners?",
    questionAr: "ما هي الخاصية في ويدجت الحاوية (Container) المستخدمة لإضافة الحواف والزوايا الدائرية؟",
    options: [
      { key: 'A', text: "padding", textAr: "الحشوة" },
      { key: 'B', text: "decoration", textAr: "الزخرفة / التزيين" },
      { key: 'C', text: "color", textAr: "اللون" },
      { key: 'D', text: "border", textAr: "الحدود" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Adding visual style to a generic container makes UIs more attractive.",
    explanationDetailsAr: "إضافة لمسات جمالية للحاويات يجعل واجهة المستخدم أكثر جاذبية.",
    explanationAnswer: "The decoration property (using BoxDecoration) allows you to define borders, border radii, gradients, and shadows.",
    explanationAnswerAr: "تستقبل هذه الخاصية كائناً من نوع BoxDecoration، والذي يتحكم في الحدود والزوايا الدائرية والظلال."
  },
  {
    id: 23,
    question: "What is the purpose of the 'pubspec.lock' file?",
    questionAr: "ما هو الغرض من ملف 'pubspec.lock'؟",
    options: [
      { key: 'A', text: "To lock the project editing", textAr: "لقفل تعديل المشروع" },
      { key: 'B', text: "To record specific versions of installed dependencies", textAr: "لتسجيل الإصدارات المحددة للتبعيات المثبتة" },
      { key: 'C', text: "To store API keys", textAr: "لتخزين مفاتيح API" },
      { key: 'D', text: "To define assets", textAr: "لتعريف الملفات المرفقة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Consistency across different machines and builds is critical in software engineering.",
    explanationDetailsAr: "التناسق بين أجهزة المطورين المختلفة أمر بالغ الأهمية في هندسة البرمجيات.",
    explanationAnswer: "This file pins the exact versions of packages used, ensuring everyone working on the project uses the same code.",
    explanationAnswerAr: "يعمل هذا الملف على تثبيت وحفظ رقم الإصدار الدقيق لكل مكتبة تم تحميلها، مما يضمن عمل الجميع بنفس الأكواد."
  },
  {
    id: 24,
    question: "Which widget is used for a user to type text into?",
    questionAr: "أي ويدجت يُستخدم ليقوم المستخدم بكتابة نص بداخله؟",
    options: [
      { key: 'A', text: "Label", textAr: "ملصق" },
      { key: 'B', text: "TextField", textAr: "حقل نصي" },
      { key: 'C', text: "InputBox", textAr: "مربع إدخال" },
      { key: 'D', text: "Form", textAr: "نموذج" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Getting text input from users is essential for search, chat, and data entry.",
    explanationDetailsAr: "الحصول على مدخلات نصية من المستخدمين أمر أساسي للبحث والدردشة وإدخال البيانات.",
    explanationAnswer: "TextField is the primary widget for text input. For form validation, TextFormField is often used.",
    explanationAnswerAr: "الإجابة هي TextField. هو الويدجت القياسي لإنشاء حقول الإدخال النصية في فلاتر."
  },
  {
    id: 25,
    question: "What does the '??' operator do in Dart?",
    questionAr: "ماذا يفعل المعامل '??' في لغة دارت (Dart)؟",
    options: [
      { key: 'A', text: "Equality check", textAr: "التحقق من المساواة" },
      { key: 'B', text: "Returns right-hand value if left-hand is null", textAr: "يُرجع القيمة اليمنى إذا كانت اليسرى فارغة" },
      { key: 'C', text: "Boolean OR", textAr: "عملية أو المنطقية" },
      { key: 'D', text: "Force non-null", textAr: "فرض عدم الفراغ" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Dart's null safety features help prevent common runtime errors.",
    explanationDetailsAr: "ميزات الأمان ضد القيم الفارغة في دارت تساعد في منع أخطاء التشغيل الشائعة.",
    explanationAnswer: "Known as the if-null operator, it provides a fallback value when the expression on the left evaluates to null.",
    explanationAnswerAr: "وظيفته فحص القيمة الموجودة على يساره؛ فإذا كانت فارغة (Null) فإنه يُرجع القيمة البديلة على يمينه."
  },
  {
    id: 26,
    question: "Which constructor loads an image from a URL?",
    questionAr: "أي مُنشئ (Constructor) يقوم بتحميل صورة من رابط ويب (URL)؟",
    options: [
      { key: 'A', text: "Image.file", textAr: "صورة من ملف محلي" },
      { key: 'B', text: "Image.network", textAr: "صورة من الإنترنت" },
      { key: 'C', text: "Image.asset", textAr: "صورة من المرفقات" },
      { key: 'D', text: "Image.url", textAr: "صورة من رابط" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Displaying dynamic content often involves fetching images from remote servers.",
    explanationDetailsAr: "عرض المحتوى الديناميكي يتطلب غالباً جلب الصور من خوادم بعيدة.",
    explanationAnswer: "Image.network handles the fetching and rendering of images from a provided web address.",
    explanationAnswerAr: "الإجابة هي Image.network. هذه الدالة تأخذ رابط الصورة، تحملها، وتعرضها على الشاشة تلقائياً."
  },
  {
    id: 27,
    question: "What is the use of the 'Icons' class?",
    questionAr: "ما هو استخدام الفئة 'Icons'؟",
    options: [
      { key: 'A', text: "To create animations", textAr: "لإنشاء الحركات" },
      { key: 'B', text: "To display predefined Material symbols", textAr: "لعرض رموز ماتيريال المُعرفة مسبقاً" },
      { key: 'C', text: "To define launcher icons", textAr: "لتعريف أيقونات إطلاق التطبيق" },
      { key: 'D', text: "To import SVGs", textAr: "لاستيراد ملفات SVG" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Visual icons help users understand app functionality without reading text.",
    explanationDetailsAr: "الأيقونات البصرية تساعد المستخدمين على فهم وظائف التطبيق دون قراءة النصوص.",
    explanationAnswer: "The Icons class provides access to a large library of standard icons used in Material Design.",
    explanationAnswerAr: "توفر فئة Icons وصولاً سهلاً ومباشراً لآلاف الأيقونات الجاهزة المصممة وفقاً للغة تصميم جوجل."
  },
  {
    id: 28,
    question: "Which widget detects gestures like taps and double-taps?",
    questionAr: "أي ويدجت يكتشف الإيماءات مثل النقرات والنقرات المزدوجة؟",
    options: [
      { key: 'A', text: "Button", textAr: "زر" },
      { key: 'B', text: "GestureDetector", textAr: "مكتشف الإيماءات" },
      { key: 'C', text: "TouchListener", textAr: "مستمع اللمس" },
      { key: 'D', text: "InkWell", textAr: "تأثير بقعة الحبر" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Interactivity on mobile goes beyond simple buttons to include drags, scales, and multiple taps.",
    explanationDetailsAr: "التفاعل على الموبايل يتجاوز الأزرار ليشمل السحب والتقريب والنقرات المتعددة.",
    explanationAnswer: "GestureDetector is a non-visual widget used to detect various user interactions on any child widget.",
    explanationAnswerAr: "الإجابة هي GestureDetector. هو ويدجت غير مرئي يمنح أي عنصر القدرة على الاستجابة للمسات المتنوعة."
  },
  {
    id: 29,
    question: "What is the 'crossAxisAlignment' in a Column?",
    questionAr: "ما هي خاصية 'crossAxisAlignment' في العمود (Column)؟",
    options: [
      { key: 'A', text: "Vertical alignment", textAr: "المحاذاة العمودية" },
      { key: 'B', text: "Horizontal alignment", textAr: "المحاذاة الأفقية" },
      { key: 'C', text: "Spacing between children", textAr: "المسافات بين العناصر" },
      { key: 'D', text: "Reversing order", textAr: "عكس الترتيب" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Layout widgets use two axes. For Column, the main axis is vertical and cross axis is horizontal.",
    explanationDetailsAr: "ويدجتات التصميم تستخدم محورين. للعمود، المحور الرئيسي عمودي والمحور المتقاطع أفقي.",
    explanationAnswer: "In a Column, crossAxisAlignment determines how children are placed along the horizontal axis.",
    explanationAnswerAr: "في ويدجت العمود، تستخدم خاصية crossAxisAlignment لمحاذاة العناصر يميناً أو يساراً أفقياً."
  },
  {
    id: 30,
    question: "What keyword imports a library in Dart?",
    questionAr: "ما هي الكلمة المفتاحية التي تستورد مكتبة في لغة دارت؟",
    options: [
      { key: 'A', text: "using", textAr: "باستخدام" },
      { key: 'B', text: "import", textAr: "استيراد" },
      { key: 'C', text: "include", textAr: "تضمين" },
      { key: 'D', text: "require", textAr: "تطلب" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Modularity in code requires a way to include code from other files and packages.",
    explanationDetailsAr: "تجزئة الكود تتطلب طريقة لتضمين الأكواد من ملفات وحزم أخرى.",
    explanationAnswer: "The 'import' keyword is used to load dependencies and libraries into your Dart file.",
    explanationAnswerAr: "الإجابة هي import. هي الكلمة القياسية في لغة دارت لجلب الملفات والمكتبات للاستفادة منها."
  },
  {
    id: 31,
    question: "What is the command to create a new Flutter project?",
    questionAr: "ما هو الأمر المستخدم لإنشاء مشروع فلاتر جديد؟",
    options: [
      { key: 'A', text: "flutter new", textAr: "فلاتر جديد" },
      { key: 'B', text: "flutter create", textAr: "إنشاء فلاتر" },
      { key: 'C', text: "flutter start", textAr: "بدء فلاتر" },
      { key: 'D', text: "dart create", textAr: "إنشاء دارت" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Starting a new project requires generating the necessary folder structure and initial files.",
    explanationDetailsAr: "بدء مشروع جديد يتطلب توليد هيكل المجلدات والملفات الأولية اللازمة.",
    explanationAnswer: "The 'flutter create' command initializes a new project with all platform-specific boilerplate.",
    explanationAnswerAr: "الإجابة هي flutter create. هذا الأمر يقوم ببناء المجلدات الأساسية لكي تبدأ البرمجة فوراً."
  },
  {
    id: 32,
    question: "Which property is used to change the background color of a Scaffold?",
    questionAr: "ما هي الخاصية المستخدمة لتغيير لون الخلفية لويدجت الهيكل (Scaffold)؟",
    options: [
      { key: 'A', text: "color", textAr: "لون" },
      { key: 'B', text: "background", textAr: "خلفية" },
      { key: 'C', text: "backgroundColor", textAr: "لون الخلفية" },
      { key: 'D', text: "canvasColor", textAr: "لون لوحة الرسم" }
    ],
    correctAnswer: 'C',
    explanationDetails: "Defining the canvas color of your screen is the first step in visual branding.",
    explanationDetailsAr: "تحديد لون الشاشة هو الخطوة الأولى في تمييز هوية التطبيق البصرية.",
    explanationAnswer: "backgroundColor is the dedicated property within Scaffold to set the primary surface color.",
    explanationAnswerAr: "الإجابة هي backgroundColor. هي الخاصية المخصصة داخل Scaffold للتحكم في لون خلفية الشاشة."
  },
  {
    id: 33,
    question: "What is the role of the 'pubspec.yaml' file?",
    questionAr: "ما هو دور ملف 'pubspec.yaml'؟",
    options: [
      { key: 'A', text: "To write the logic", textAr: "لكتابة المنطق" },
      { key: 'B', text: "To manage dependencies and assets", textAr: "لإدارة التبعيات والملفات المرفقة" },
      { key: 'C', text: "To store private data", textAr: "لتخزين البيانات الخاصة" },
      { key: 'D', text: "To compile the app", textAr: "لترجمة التطبيق" }
    ],
    correctAnswer: 'B',
    explanationDetails: "A central configuration file makes managing project resources easier.",
    explanationDetailsAr: "وجود ملف إعداد مركزي يسهل عملية إدارة موارد المشروع.",
    explanationAnswer: "It acts as the configuration hub for dependencies, assets, fonts, and metadata.",
    explanationAnswerAr: "هو مخصص لتعريف المكتبات الخارجية وتسجيل مسارات الصور والخطوط وتحديد الإصدار."
  },
  {
    id: 34,
    question: "Which widget makes a child invisible but keeps its space in the layout?",
    questionAr: "أي ويدجت يجعل العنصر غير مرئي ولكنه يظل شاغلاً لمساحته؟",
    options: [
      { key: 'A', text: "Opacity", textAr: "الشفافية" },
      { key: 'B', text: "Visibility", textAr: "الرؤية" },
      { key: 'C', text: "Offstage", textAr: "خارج المسرح" },
      { key: 'D', text: "Hidden", textAr: "مخفي" }
    ],
    correctAnswer: 'A',
    explanationDetails: "Sometimes you need to hide an element without causing surrounding components to shift.",
    explanationDetailsAr: "أحياناً نحتاج لإخفاء عنصر دون أن ينهار التصميم أو تتحرك العناصر المجاورة.",
    explanationAnswer: "Setting Opacity to 0.0 hides the widget while preserving its size and position during layout.",
    explanationAnswerAr: "عند ضبط الشفافية (Opacity) على الصفر، يختفي العنصر ولكن يظل شاغلاً لموقعه ومساحته."
  },
  {
    id: 35,
    question: "What is an 'Isolate' in Dart?",
    questionAr: "ما هو الـ 'Isolate' في لغة دارت؟",
    options: [
      { key: 'A', text: "A type of Widget", textAr: "نوع من الويدجتات" },
      { key: 'B', text: "A separate thread of execution with its own memory", textAr: "مسار تنفيذ منفصل بذاكرة خاصة" },
      { key: 'C', text: "A debugging tool", textAr: "أداة لاكتشاف الأخطاء" },
      { key: 'D', text: "A DB system", textAr: "نظام قواعد بيانات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Concurrency in Dart is handled via dedicated memory spaces to avoid locking issues.",
    explanationDetailsAr: "التعامل مع المهام المتعددة في دارت يتم عبر مساحات ذاكرة مستقلة لتجنب مشاكل التعارض.",
    explanationAnswer: "Isolates run code in parallel without sharing memory, communicating only via messages.",
    explanationAnswerAr: "كل Isolate له مساحة ذاكرة خاصة ومسار تنفيذ مستقل، ويتواصلون عبر تبادل الرسائل فقط."
  },
  {
    id: 36,
    question: "Which widget is used to detect horizontal and vertical drags?",
    questionAr: "أي ويدجت يُستخدم لاكتشاف حركات السحب الأفقية والعمودية؟",
    options: [
      { key: 'A', text: "InkWell", textAr: "تأثير بقعة الحبر" },
      { key: 'B', text: "GestureDetector", textAr: "مكتشف الإيماءات" },
      { key: 'C', text: "FlatButton", textAr: "زر مسطح" },
      { key: 'D', text: "ScrollView", textAr: "عرض التمرير" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Capturing finger movement across the screen is needed for many interactive transitions.",
    explanationDetailsAr: "التقاط حركة الإصبع عبر الشاشة مطلوب للعديد من الانتقالات التفاعلية.",
    explanationAnswer: "GestureDetector has callbacks like onPanUpdate and onHorizontalDrag to track continuous finger movement.",
    explanationAnswerAr: "الإجابة GestureDetector. يمتلك دوال استماع متقدمة مثل onPanUpdate التي تزود المبرمج بتفاصيل حركة الإصبع."
  },
  {
    id: 37,
    question: "What does 'Tree Shaking' refer to in Flutter?",
    questionAr: "إلى ماذا يشير مصطلح 'Tree Shaking' في فلاتر؟",
    options: [
      { key: 'A', text: "Removing unused code during build", textAr: "إزالة الكود غير المستخدم أثناء البناء" },
      { key: 'B', text: "Organizing the widget tree", textAr: "تنظيم شجرة الويدجتات" },
      { key: 'C', text: "Debugging UI errors", textAr: "اكتشاف أخطاء واجهة المستخدم" },
      { key: 'D', text: "Refreshing app state", textAr: "تحديث حالة التطبيق" }
    ],
    correctAnswer: 'A',
    explanationDetails: "Optimizing the final binary size is key for mobile devices with limited storage.",
    explanationDetailsAr: "تحسين حجم التطبيق النهائي أمر أساسي للهواتف ذات المساحة المحدودة.",
    explanationAnswer: "Tree shaking is a compilation process that removes unreachable code and unreferenced libraries, shrinking the app size.",
    explanationAnswerAr: "الإجابة (A). تقنية 'هز الشجرة' هي عملية تحسين يقوم بها المترجم لاستبعاد أي كود غير مستخدم فعلياً."
  },
  {
    id: 38,
    question: "Which widget is used to display a circular progress indicator?",
    questionAr: "ما هو العنصر (Widget) المستخدم لعرض مؤشر تقدم دائري؟",
    options: [
      { key: 'A', text: "LoadingCircle", textAr: "دائرة التحميل" },
      { key: 'B', text: "ProgressIndicator", textAr: "مؤشر التقدم" },
      { key: 'C', text: "CircularProgressIndicator", textAr: "مؤشر التقدم الدائري" },
      { key: 'D', text: "RefreshIndicator", textAr: "مؤشر التحديث" }
    ],
    correctAnswer: 'C',
    explanationDetails: "Providing visual feedback during data fetching keeps users engaged.",
    explanationDetailsAr: "تقديم تغذية بصرية أثناء جلب البيانات يحافظ على تفاعل المستخدم.",
    explanationAnswer: "CircularProgressIndicator is the standard Material widget for showing a spinning loading ring.",
    explanationAnswerAr: "الإجابة هي CircularProgressIndicator. هذا هو الويدجت القياسي لعرض حلقة دائرية دوّارة."
  },
  {
    id: 39,
    question: "How do you add a single-line comment in Dart code?",
    questionAr: "كيف تقوم بإضافة تعليق لسطر واحد في كود دارت؟",
    options: [
      { key: 'A', text: "# comment", textAr: "# تعليق" },
      { key: 'B', text: "// comment", textAr: "// تعليق" },
      { key: 'C', text: "-- comment", textAr: "-- تعليق" },
      { key: 'D', text: "/* comment */", textAr: "/* تعليق */" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Code documentation is essential for maintainability and collaboration.",
    explanationDetailsAr: "توثيق الكود أمر أساسي للصيانة والتعاون بين المبرمجين.",
    explanationAnswer: "Dart uses double forward slashes (//) for single-line comments. Slash-star (/*) is for multiline comments.",
    explanationAnswerAr: "تُستخدم الشُرطتان المائلتان المزدوجتان // لكتابة تعليق يمتد لسطر واحد فقط في لغة دارت."
  },
  {
    id: 40,
    question: "What is 'InheritedWidget' primarily used for?",
    questionAr: "ما هو الاستخدام الأساسي لـ 'InheritedWidget'؟",
    options: [
      { key: 'A', text: "Navigating between screens", textAr: "التنقل بين الشاشات" },
      { key: 'B', text: "Passing data down the widget tree efficiently", textAr: "تمرير البيانات لأسفل الشجرة بكفاءة" },
      { key: 'C', text: "Storing data in local DB", textAr: "تخزين البيانات محلياً" },
      { key: 'D', text: "Creating animations", textAr: "إنشاء حركات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Avoiding 'prop drilling' where data is passed through many intermediate constructors is a core Flutter pattern.",
    explanationDetailsAr: "تجنب تمرير البيانات عبر العديد من دوال البناء الوسيطة هو نمط أساسي في فلاتر.",
    explanationAnswer: "InheritedWidget allows ancestor data to be accessed directly by distant descendants without manual passing.",
    explanationAnswerAr: "الـ InheritedWidget يسمح للويدجتات الأبناء بالوصول المباشر للبيانات دون الحاجة لتمريرها يدوياً."
  },
  {
    id: 41,
    question: "Which class is the parent of all widgets in Flutter?",
    questionAr: "أي فئة (Class) تعتبر الأب لجميع الويدجتات في فلاتر؟",
    options: [
      { key: 'A', text: "BaseWidget", textAr: "الويدجت الأساسي" },
      { key: 'B', text: "UIElement", textAr: "عنصر واجهة المستخدم" },
      { key: 'C', text: "Widget", textAr: "ويدجت" },
      { key: 'D', text: "Object", textAr: "كائن" }
    ],
    correctAnswer: 'C',
    explanationDetails: "The entire Flutter framework is built around a unified base class for UI components.",
    explanationDetailsAr: "إطار عمل فلاتر بالكامل مبني حول فئة أساسية موحدة لمكونات واجهة المستخدم.",
    explanationAnswer: "Widget is the root class for all UI components in Flutter. Even State objects are linked to a specific Widget.",
    explanationAnswerAr: "الإجابة هي Widget. كل مكون مرئي في فلاتر هو في الأساس يرث من فئة Widget الأساسية."
  },
  {
    id: 42,
    question: "What is the purpose of 'SafeArea' widget?",
    questionAr: "ما هو الغرض من ويدجت 'SafeArea'؟",
    options: [
      { key: 'A', text: "To encrypt data", textAr: "تشفير البيانات" },
      { key: 'B', text: "To avoid system UI (notches, status bars)", textAr: "تجنب واجهة النظام (النوتش وأشرطة الحالة)" },
      { key: 'C', text: "To prevent crashes", textAr: "منع الانهيار" },
      { key: 'D', text: "To handle permissions", textAr: "التعامل مع الصلاحيات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Modern phones have non-rectangular screens that can obscure app content.",
    explanationDetailsAr: "الهواتف الحديثة لها شاشات غير مستطيلة قد تحجب محتوى التطبيق.",
    explanationAnswer: "SafeArea automatically adds necessary padding to ensure content is not hidden behind device hardware features.",
    explanationAnswerAr: "يعمل SafeArea على حماية واجهتك عن طريق إضافة هوامش ذكية تبعد المحتوى عن حواف الهاتف."
  },
  {
    id: 43,
    question: "Which function is called once when a State object is inserted into the tree?",
    questionAr: "ما هي الدالة التي يتم استدعاؤها مرة واحدة عند إدراج كائن الحالة في الشجرة؟",
    options: [
      { key: 'A', text: "build()", textAr: "دالة البناء" },
      { key: 'B', text: "updateState()", textAr: "تحديث الحالة" },
      { key: 'C', text: "initState()", textAr: "تهيئة الحالة" },
      { key: 'D', text: "dispose()", textAr: "التخلص من الحالة" }
    ],
    correctAnswer: 'C',
    explanationDetails: "Standard initialization logic like loading initial data or setting up listeners belongs here.",
    explanationDetailsAr: "منطق التهيئة القياسي مثل تحميل البيانات الأولية ينتمي لهذه الدالة.",
    explanationAnswer: "initState() is a lifecycle method called exactly once when the StatefulWidget is first created.",
    explanationAnswerAr: "الإجابة هي initState(). هذه الدالة تُستدعى مرة واحدة فقط في بداية حياة الويدجت لإجراء الإعدادات الأولية."
  },
  {
    id: 44,
    question: "What is 'Flutter Inspector'?",
    questionAr: "ما هو 'Flutter Inspector'؟",
    options: [
      { key: 'A', text: "A tool to visualize and debug the widget tree", textAr: "أداة لتصور واكتشاف أخطاء شجرة الويدجتات" },
      { key: 'B', text: "A package for unit testing", textAr: "حزمة لاختبار الوحدات" },
      { key: 'C', text: "A security scanner", textAr: "ماسح أمني" },
      { key: 'D', text: "A CLI compiler", textAr: "مترجم برمجيات" }
    ],
    correctAnswer: 'A',
    explanationDetails: "Understanding the hierarchy and properties of active widgets is vital for debugging layout issues.",
    explanationDetailsAr: "فهم التسلسل الهرمي وخصائص الويدجتات النشطة أمر حيوي لتصحيح مشاكل التصميم.",
    explanationAnswer: "It's an IDE tool that allows developers to inspect the blueprint of their running UI.",
    explanationAnswerAr: "هي أداة مرئية تساعدك على رؤية هيكل واجهة المستخدم (شجرة الويدجتات) وتصحيح أخطاء التصميم."
  },
  {
    id: 45,
    question: "Which widget would you use to create a dropdown menu?",
    questionAr: "أي ويدجت قد تستخدمه لإنشاء قائمة منسدلة؟",
    options: [
      { key: 'A', text: "SelectBox", textAr: "مربع اختيار" },
      { key: 'B', text: "DropdownButton", textAr: "زر القائمة المنسدلة" },
      { key: 'C', text: "Picker", textAr: "منتقي" },
      { key: 'D', text: "MenuButton", textAr: "زر القائمة" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Providing a list of mutually exclusive choices is a common UI requirement.",
    explanationDetailsAr: "تقديم قائمة من الخيارات التي يستبعد بعضها بعضاً هو مطلب شائع في واجهات المستخدم.",
    explanationAnswer: "DropdownButton displays a temporary menu of items for the user to select one value from.",
    explanationAnswerAr: "الإجابة DropdownButton. هو الويدجت القياسي لإنشاء زر يعرض قائمة بخيارات منسدلة عند النقر عليه."
  },
  {
    id: 46,
    question: "What does the 'final' keyword mean for a variable?",
    questionAr: "ماذا تعني الكلمة المفتاحية 'final' بالنسبة للمتغير؟",
    options: [
      { key: 'A', text: "Value can be changed anytime", textAr: "القيمة تتغير في أي وقت" },
      { key: 'B', text: "Value can be set only once", textAr: "يمكن تعيين القيمة مرة واحدة فقط" },
      { key: 'C', text: "Compile-time only", textAr: "وقت التجميع فقط" },
      { key: 'D', text: "Public entry", textAr: "مدخل عام" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Defining immutable variables ensures data integrity throughout the app's execution.",
    explanationDetailsAr: "تعريف متغيرات غير قابلة للتغيير يضمن سلامة البيانات أثناء تنفيذ التطبيق.",
    explanationAnswer: "A final variable can be initialized at runtime but its value cannot be changed once assigned.",
    explanationAnswerAr: "الإجابة (B). عندما تسبق المتغير بكلمة final، فإنك تضمن أنه سيأخذ قيمته مرة واحدة فقط ولا يمكن تغييرها."
  },
  {
    id: 47,
    question: "Which widget is used to display an Alert Dialog?",
    questionAr: "أي ويدجت يُستخدم لعرض مربع حوار تنبيهي (Alert Dialog)؟",
    options: [
      { key: 'A', text: "DialogBox", textAr: "مربع حوار" },
      { key: 'B', text: "PopupWidget", textAr: "ويدجت منبثق" },
      { key: 'C', text: "AlertDialog", textAr: "حوار تنبيهي / رسالة تنبيه" },
      { key: 'D', text: "MessageDialog", textAr: "حوار رسالة" }
    ],
    correctAnswer: 'C',
    explanationDetails: "Interrupting the user flow to confirm actions or show warnings is handled via dialogs.",
    explanationDetailsAr: "مقاطعة تدفق المستخدم لتأكيد الإجراءات أو إظهار التحذيرات تتم عبر حوارات التنبيه.",
    explanationAnswer: "AlertDialog is the standard Material component for popup messages that require user confirmation.",
    explanationAnswerAr: "الإجابة هي AlertDialog. هو المكون الجاهز المخصص لإنشاء النوافذ المنبثقة التنبيهية التي تتطلب انتباهاً."
  },
  {
    id: 48,
    question: "What is the 'Keys' property in a Widget used for?",
    questionAr: "في ماذا تُستخدم خاصية 'Keys' (المفاتيح) في الويدجت؟",
    options: [
      { key: 'A', text: "To store passwords", textAr: "لتخزين كلمات المرور" },
      { key: 'B', text: "To uniquely identify and preserve state", textAr: "لتعريف الويدجت فريداً والحفاظ على الحالة" },
      { key: 'C', text: "Keyboard shortcuts", textAr: "اختصارات لوحة المفاتيح" },
      { key: 'D', text: "To encrypt data", textAr: "لتشفير البيانات" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Keys are necessary when moving elements in a list or across different parent widgets.",
    explanationDetailsAr: "المفاتيح ضرورية عند تحريك العناصر في قائمة أو عبر ويدجتات أباء مختلفة.",
    explanationAnswer: "Keys help Flutter understand which widget is which during re-renders, especially in dynamic lists.",
    explanationAnswerAr: "تساعد المفاتيح فلاتر على تتبع الويدجت والحفاظ على بياناته عندما يتغير موقعه في الشجرة."
  },
  {
    id: 49,
    question: "Which widget provides a scrollable, linear array of widgets?",
    questionAr: "أي ويدجت يوفر مصفوفة طولية وقابلة للتمرير من الويدجتات؟",
    options: [
      { key: 'A', text: "Column", textAr: "عمود" },
      { key: 'B', text: "Stack", textAr: "مكدس" },
      { key: 'C', text: "ListView", textAr: "قائمة العرض" },
      { key: 'D', text: "Grid", textAr: "شبكة" }
    ],
    correctAnswer: 'C',
    explanationDetails: "Linear data representation is the most common way to display content feeds.",
    explanationDetailsAr: "التمثيل الخطي للبيانات هو الطريقة الأكثر شيوعاً لعرض خلاصات المحتوى.",
    explanationAnswer: "ListView is a scrollable container that arranges its children in a vertical or horizontal line.",
    explanationAnswerAr: "الإجابة ListView. هو العنصر الأكثر استخداماً لعرض القوائم ويدعم ميزة التمرير (Scrolling) افتراضياً."
  },
  {
    id: 50,
    question: "How do you handle a click event on an 'ElevatedButton'?",
    questionAr: "كيف تتعامل مع حدث النقر على ويدجت 'ElevatedButton'؟",
    options: [
      { key: 'A', text: "Using 'onClick'", textAr: "باستخدام 'onClick'" },
      { key: 'B', text: "Using 'onPressed'", textAr: "باستخدام 'onPressed'" },
      { key: 'C', text: "Using 'onTap'", textAr: "باستخدام 'onTap'" },
      { key: 'D', text: "Using 'onSelect'", textAr: "باستخدام 'onSelect'" }
    ],
    correctAnswer: 'B',
    explanationDetails: "Mapping user interactions to specific logic is the core of application development.",
    explanationDetailsAr: "ربط تفاعلات المستخدم بمنطق برمجبي محدد هو جوهر تطوير التطبيقات.",
    explanationAnswer: "The onPressed parameter is where you provide the function to be executed when the button is tapped.",
    explanationAnswerAr: "الخاصية الرسمية للتعامل مع النقرات في الأزرار هي onPressed، حيث نمرر الدالة التي تنفذ الكود."
  }
];
