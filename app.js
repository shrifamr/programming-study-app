const lessons = [
  {
    title: "لغة البرمجة والمترجم",
    tag: "أساسيات",
    intro: "لغة البرمجة هي نظام رسمي نكتب به تعليمات يستطيع الكمبيوتر تنفيذها. الكمبيوتر في النهاية يفهم Machine Language فقط: 0 و 1.",
    blocks: [
      ["الهدف", ["تحويل الخوارزمية إلى أوامر قابلة للتنفيذ.", "أمثلة لغات: Python و C++ و Java.", "Python لغة مفسرة، لذلك مناسبة للتعلم والتصحيح السريع."]],
      ["Interpreter", ["ينفذ الكود سطر بسطر.", "يعطي الخطأ عند حدوثه مباشرة.", "أسهل في التصحيح لكنه أبطأ من Compiler."]],
      ["Compiler", ["يترجم البرنامج بالكامل إلى Machine Code قبل التشغيل.", "ينتج ملف Executable.", "أسرع في التنفيذ، لكن اكتشاف الأخطاء قد يكون أصعب."]]
    ]
  },
  {
    title: "حل المشكلات قبل الكود",
    tag: "Problem Solving",
    intro: "المحاضرة الأولى مركزة على إن البرمجة مش كتابة كود مباشرة. الأول نفهم المشكلة، نطلع Algorithm، وبعدين نحولها لبرنامج ونختبره.",
    code: "Problem: احسب مساحة دائرة\nInput: radius\nProcessing: area = 3.14 * radius * radius\nOutput: area",
    blocks: [
      ["مراحل البرمجة", ["Problem definition: افهم المطلوب والمدخلات والمخرجات.", "Algorithm: اكتب خطوات الحل بترتيب منطقي.", "Coding: حول الخطوات إلى Python أو أي لغة.", "Testing: شغل البرنامج وقارن الناتج بالمتوقع."]],
      ["IPO", ["Input: البيانات التي تدخل للبرنامج.", "Processing: العمليات والحسابات والشروط.", "Output: النتيجة التي تظهر للمستخدم."]],
      ["البنى الثلاثة", ["Sequence: خطوات وراء بعضها.", "Decision: اختيار باستخدام if.", "Repetition: تكرار باستخدام loop."]]
    ]
  },
  {
    title: "الطباعة والرموز الخاصة",
    tag: "Print",
    intro: "أول أمر مهم في بايثون هو print. نستخدمه لإظهار نص أو قيم متغيرات على الشاشة.",
    code: "print(\"Hello World\")\nprint(\"A\", \"B\", sep=\"-\")\nprint(\"same\", end=\" \")\nprint(\"line\")\nprint(\"new\\nline\")",
    blocks: [
      ["ملاحظات امتحان", ["النصوص لازم تكون داخل علامات تنصيص.", "print بحروف صغيرة؛ Print خطأ.", "end يمنع النزول لسطر جديد أو يغير نهايته.", "sep يحدد الفاصل بين القيم.", "\\n سطر جديد، و \\t مسافة Tab."]]
    ]
  },
  {
    title: "المتغيرات وأنواع البيانات",
    tag: "Variables",
    intro: "المتغير هو اسم نخزن فيه قيمة. نوع القيمة يحدد طريقة التعامل معها.",
    code: "age = 20          # int\nmass = 2.75       # float\nname = \"Ali\"      # str",
    blocks: [
      ["أنواع شائعة", ["int عدد صحيح مثل 25.", "float عدد عشري مثل 2.75.", "str نص مثل \"Ali\"."]],
      ["قواعد التسمية", ["لا يبدأ الاسم برقم.", "لا يحتوي مسافات.", "لا تستخدم كلمات محجوزة.", "الأسماء حساسة لحالة الأحرف: name غير Name."]]
    ]
  },
  {
    title: "الإدخال والتحويل",
    tag: "Input",
    intro: "الدالة input ترجع نص دائماً، حتى لو المستخدم كتب رقم. لذلك نستخدم int أو float عند الحاجة لحسابات.",
    code: "score = int(input(\"Enter score: \"))\nvolume = float(input(\"Enter volume: \"))",
    blocks: [
      ["مهم جداً", ["input() ترجع string دائماً.", "int('5') صحيح.", "int('5.0') يسبب خطأ لأن 5.0 نص لعدد عشري.", "لقراءة رقم عشري استخدم float(input())."]]
    ]
  },
  {
    title: "العمليات الحسابية والأولوية",
    tag: "Operators",
    intro: "العمليات الحسابية تظهر كثيراً في أسئلة التتبع. أهم فرق لازم تحفظه: / تعطي قسمة عشرية، و // تعطي قسمة صحيحة.",
    code: "print(5 / 2)    # 2.5\nprint(5 // 2)   # 2\nprint(17 % 3)   # 2\nprint(2 ** 3 ** 2)  # 512",
    blocks: [
      ["العمليات", ["+ جمع، - طرح، * ضرب.", "/ قسمة عشرية.", "// قسمة صحيحة.", "% باقي القسمة.", "** أس."]],
      ["الأولوية", ["الأس ** له أولوية عالية ويتحسب من اليمين لليسار.", "بعده الضرب والقسمة وباقي القسمة.", "بعده الجمع والطرح.", "استخدم الأقواس لو عايز نتيجة محددة."]]
    ]
  },
  {
    title: "هياكل القرار",
    tag: "If",
    intro: "if تختار مسار بناءً على شرط. الترتيب مهم، وأول شرط صحيح هو الذي ينفذ.",
    code: "score = 75\nif score >= 80:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"B\"\nelif score >= 50:\n    grade = \"C\"\nelse:\n    grade = \"Fail\"\nprint(grade)",
    blocks: [
      ["معاملات المقارنة", [
        "<code class=\"inline-op\">&gt;</code> أكبر من.",
        "<code class=\"inline-op\">&lt;</code> أصغر من.",
        "<code class=\"inline-op\">&gt;=</code> أكبر من أو يساوي.",
        "<code class=\"inline-op\">&lt;=</code> أصغر من أو يساوي.",
        "<code class=\"inline-op\">==</code> مقارنة تساوي، و <code class=\"inline-op\">!=</code> لا يساوي.",
        "<code class=\"inline-op\">=</code> للتخزين وليس للمقارنة."
      ]],
      ["مقارنة النصوص", ["حساسة لحالة الأحرف.", "Ali لا تساوي ali.", "الحروف الكبيرة أصغر من الصغيرة حسب ASCII."]]
    ]
  },
  {
    title: "Boolean logic والقرارات المتداخلة",
    tag: "Logic",
    intro: "Boolean expression هي جملة نتيجتها True أو False. نستخدمها مع if، وممكن نركب أكثر من شرط باستخدام and و or و not أو نعمل if داخل if.",
    code: "salary = 35000\nyears = 3\n\nif salary >= 30000 and years >= 2:\n    print(\"You qualify\")\nelse:\n    print(\"Not qualified\")",
    blocks: [
      ["and / or / not", ["and: الشرطان لازم يكونوا True.", "or: يكفي شرط واحد يكون True.", "not: يعكس النتيجة من True إلى False أو العكس."]],
      ["Nested decision", ["تعني if داخل if.", "مفيدة عندما شرط ثاني لا يتفحص إلا لو الشرط الأول صحيح.", "مثال القرض: الراتب أولاً، ثم عدد سنوات العمل."]],
      ["نصائح امتحان", ["افصل الشروط المركبة خطوة بخطوة.", "اكتب قيمة كل شرط True أو False قبل اختيار الإجابة.", "انتبه لمحاذاة else: هي تتبع أقرب if بنفس مستوى indentation."]]
    ]
  },
  {
    title: "الحلقات for و while",
    tag: "Loops",
    intro: "for تستخدم عندما عدد التكرارات معروف. while تستخدم عندما التوقف يعتمد على شرط قد لا نعرف عدد تكراراته مسبقاً.",
    code: "for i in range(1, 6):\n    print(i)\n\nwhile pH < 7.0:\n    volume_added_mL += 0.1\n    pH += 0.05",
    blocks: [
      ["for", ["تكرر على sequence أو range.", "range(start, stop, step) لا تشمل stop.", "range(2, 10, 2) تعطي 2, 4, 6, 8."]],
      ["while", ["تستمر طالما الشرط صحيح.", "لازم update داخل while لتجنب infinite loop.", "while y < 7 تتوقف عندما y تصبح 7 أو أكبر."]]
    ]
  },
  {
    title: "أنماط الحلقات المهمة",
    tag: "Loop Patterns",
    intro: "محاضرات التكرار فيها أفكار تتكرر في مسائل كثيرة: running total، counter، sentinel loop، augmented assignment، و nested loops.",
    code: "total = 0\nfor counter in range(5):\n    number = int(input(\"Enter a number: \"))\n    total += number\nprint(total)\n\nfor row in range(3):\n    for col in range(6):\n        print('*', end='')\n    print()",
    blocks: [
      ["Running total", ["ابدأ total = 0.", "داخل الحلقة اكتب total += value.", "بعد الحلقة اطبع المجموع أو احسب average."]],
      ["Sentinel loop", ["حلقة تستمر طالما المستخدم يريد الاستمرار.", "مثال: keep_going == 'y'.", "لازم تحدث قيمة sentinel داخل الحلقة حتى لا تصبح infinite loop."]],
      ["Nested loops", ["حلقة داخل حلقة.", "تستخدم للجداول والأنماط والوقت: ساعات، دقائق، ثواني.", "كل دورة من الحلقة الخارجية تشغل الحلقة الداخلية كاملة."]],
      ["Augmented assignment", ["x += 5 تعني x = x + 5.", "y -= 2 تعني y = y - 2.", "z *= 10 تعني z = z * 10."]]
    ]
  },
  {
    title: "القوائم List",
    tag: "Lists",
    intro: "الـ list هي مكان نخزن فيه أكثر من قيمة تحت اسم واحد. مفيدة جداً لما يكون عندك درجات، أوزان ذرية، أطوال موجية، أو أي مجموعة قيم.",
    code: "weights = [1.008, 1.008, 15.999]\nprint(weights[0])      # first item\nprint(weights[-1])     # last item\n\nnumbers = list(range(1, 10, 2))\nzeros = [0] * 5\n\nfor weight in weights:\n    print(weight)",
    blocks: [
      ["الفكرة", ["نكتب عناصر الـ list بين [ ] ونفصل بينهم بفواصل.", "ممكن تحتوي أرقام أو نصوص أو قيم مختلفة.", "أول عنصر index بتاعه 0، وليس 1."]],
      ["أوامر مهمة", ["list[0] تجيب أول عنصر.", "list[-1] تجيب آخر عنصر.", "append(value) تضيف عنصر في النهاية.", "remove(value) تمسح قيمة معينة.", "len(list) تعطي عدد العناصر."]],
      ["من Meeting 10", ["list(range(5)) تعطي [0, 1, 2, 3, 4].", "[0] * 5 تعطي [0, 0, 0, 0, 0].", "آخر index صحيح يساوي len(list) - 1.", "IndexError يظهر لو استخدمت index خارج حدود القائمة."]],
      ["مع الحلقات", ["نستخدم for للمرور على كل عنصر.", "ممكن نجمع عناصر list بمتغير مثل total.", "لو عايز تعد عناصر تحقق شرط معين، استخدم count وزوده داخل if."]]
    ]
  },
  {
    title: "الخوارزميات والأخطاء",
    tag: "Algorithms",
    intro: "الخوارزمية هي خطوات حل المشكلة. قبل الكود نقدر نكتب pseudocode أو نرسم flowchart.",
    code: "if N % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")\n\nhours = M // 60\nmins = M % 60",
    blocks: [
      ["Flowchart", ["بيضاوي: Start / End.", "مستطيل: Process.", "معين: Decision.", "متوازي أضلاع: Input / Output."]],
      ["أنواع الأخطاء", ["Syntax Error: خطأ في كتابة الكود.", "Runtime Error: يظهر أثناء التشغيل.", "Semantic Error: الكود يعمل لكن الناتج غلط."]],
      ["نصائح MCQ", ["تتبع المتغيرات خطوة بخطوة.", "انتبه للـ indentation.", "range لا تشمل stop.", "استخدم min و max عند المقارنات السريعة."]]
    ]
  }
];

const labs = [
  {
    title: "قسمة صحيحة وباقي القسمة",
    desc: "x = 5 و y = 2. احسب x // y + x % y.",
    code: "x = 5\ny = 2\nprint(x // y + x % y)",
    trace: ["5 // 2 = 2", "5 % 2 = 1", "2 + 1 = 3"]
  },
  {
    title: "اضمحلال نظير",
    desc: "الكتلة تبدأ من 100 وتتنصف حتى تصبح أقل من 1%.",
    code: "initial_mass = 100.0\ncurrent_mass = initial_mass\ncycles = 0\nwhile current_mass >= 1.0:\n    current_mass /= 2\n    cycles += 1",
    trace: ["100", "50", "25", "12.5", "6.25", "3.125", "1.5625", "0.78125", "cycles = 7"]
  },
  {
    title: "معايرة pH",
    desc: "كل خطوة تزود pH بمقدار 0.05 وتزود الحجم 0.1 mL حتى pH = 7.",
    code: "pH = 1.0\nvol = 0.0\nwhile pH < 7.0:\n    vol += 0.1\n    pH += 0.05",
    trace: ["الفرق = 6.0", "6.0 / 0.05 = 120 خطوة", "120 × 0.1 = 12.0 mL"]
  },
  {
    title: "الطيف المرئي",
    desc: "نعد الأطوال الموجية بين 380 و 750.",
    code: "wavelengths = [250, 400, 550, 700, 850, 1000]\ncount = 0\nfor w in wavelengths:\n    if 380 <= w <= 750:\n        count += 1",
    trace: ["400 داخل", "550 داخل", "700 داخل", "count = 3"]
  },
  {
    title: "جمع عناصر List",
    desc: "نحسب الكتلة المولية للماء من قائمة أوزان ذرية.",
    code: "weights = [1.008, 1.008, 15.999]\nmolar_mass = 0\nfor weight in weights:\n    molar_mass += weight\nprint(molar_mass)",
    trace: ["0 + 1.008", "2.016", "2.016 + 15.999", "18.015"]
  },
  {
    title: "متوسط درجات فصل",
    desc: "نمط running total: نجمع الدرجات ثم نقسم على عدد الطلاب.",
    code: "total = 0\nfor counter in range(10):\n    grade = int(input('Enter a grade: '))\n    total += grade\navg = total / 10\nprint(avg)",
    trace: ["total يبدأ 0", "كل درجة تزود total", "بعد 10 درجات", "avg = total / 10"]
  },
  {
    title: "تخفيف محلول",
    desc: "محلول 10M يتم تخفيفه للنصف حتى يصبح أقل من 0.001M.",
    code: "concentration = 10.0\ndilutions = 0\nwhile concentration >= 0.001:\n    concentration /= 2\n    dilutions += 1\nprint(dilutions)",
    trace: ["10", "5", "2.5", "...", "أقل من 0.001", "dilutions = 14"]
  },
  {
    title: "عد Gly في بروتين",
    desc: "نمر على قائمة أحماض أمينية ونعد مرات ظهور Gly.",
    code: "protein = ['Gly', 'Ala', 'Cys', 'Gly']\ncount = 0\nfor amino in protein:\n    if amino == 'Gly':\n        count += 1\nprint(count)",
    trace: ["Gly: count = 1", "Ala: لا يتغير", "Cys: لا يتغير", "Gly: count = 2"]
  }
];

const quiz = [
  ["Print", "Which of the following prints Hello World?", "", ["print(Hello World)", "print(\"Hello World\")", "Print(\"Hello World\")", "echo \"Hello World\""], 1, "النص لازم يكون بين علامتي تنصيص، واسم الدالة print بحروف صغيرة."],
  ["Variables", "Assume x = 10. What is the output of print(\"x\")?", "", ["10", "x", "Error", "\"x\""], 1, "لما نضع اسم المتغير بين علامات تنصيص يصبح نصاً، فيطبع x وليس قيمة المتغير."],
  ["Operators", "What is the output of print(17 % 3)?", "", ["5.666", "2", "5", "0"], 1, "% ترجع باقي القسمة. 17 على 3 الباقي 2."],
  ["Operators", "What is the output of print(2 ** 3 ** 2)?", "", ["64", "512", "256", "128"], 1, "الأسس في بايثون تتحسب من اليمين لليسار: 3**2 = 9 ثم 2**9 = 512."],
  ["Operators", "What does the code print?", "x = 5\ny = 2\nprint(x // y + x % y)", ["4.5", "3", "2", "4"], 1, "5//2 = 2 و 5%2 = 1، المجموع 3."],
  ["If", "If age = 20, what is the output?", "if age >= 18:\n    print('Adult')\nelse:\n    print('Minor')", ["Adult", "Minor", "Adult Minor", "Error"], 0, "20 أكبر من أو تساوي 18، إذن الشرط صحيح."],
  ["Strings", "What does the code print?", "name1 = 'Ali'\nname2 = 'ali'\nif name1 == name2:\n    print('Same')\nelse:\n    print('Different')", ["Same", "Different", "True", "False"], 1, "المقارنة بين النصوص حساسة لحالة الأحرف."],
  ["If", "After executing the code, what is the output?", "N = 5\nif N > 0:\n    print('+')\nelif N < 0:\n    print('-')\nelse:\n    print('0')", ["+", "-", "0", "+ - 0"], 0, "N موجبة، فيتنفذ الفرع الأول فقط."],
  ["If", "What is printed?", "score = 75\nif score >= 80:\n    grade = 'A'\nelif score >= 60:\n    grade = 'B'\nelif score >= 50:\n    grade = 'C'\nelse:\n    grade = 'Fail'\nprint(grade)", ["A", "B", "C", "Fail"], 1, "75 أكبر من أو تساوي 60 وأقل من 80، إذن الدرجة B."],
  ["Input", "Which statement correctly reads a decimal number from the user?", "", ["x = input(\"Enter x: \")", "x = float(input(\"Enter x: \"))", "x = int(input(\"Enter x: \"))", "x = float(\"Enter x: \")"], 1, "input ترجع نص، وللعدد العشري نستخدم float(input())."],
  ["Loops", "How many times does the code print Hello?", "for i in range(5):\n    print(\"Hello\")", ["4", "5", "6", "0"], 1, "range(5) تعطي 0,1,2,3,4، أي 5 مرات."],
  ["Loops", "What does the code print?", "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)", ["10", "15", "21", "6"], 1, "مجموع الأرقام من 1 إلى 5 يساوي 15."],
  ["While", "The output is:", "x = 10\nwhile x > 5:\n    x -= 2\n    print(x, end=' ')", ["8 6 4", "8 6", "8 6 4 2", "10 8 6"], 0, "يطبع 8 ثم 6 ثم 4. بعد ذلك يصبح الشرط x > 5 خطأ."],
  ["Functions", "The function min(5.0, 3.0) returns:", "", ["5.0", "3.0", "8.0", "Error"], 1, "min ترجع القيمة الأصغر."],
  ["Range", "What does range(2, 10, 2) produce?", "", ["2, 4, 6, 8, 10", "2, 4, 6, 8", "2, 4, 6, 8, 10, 12", "2, 3, 4, 5, 6, 7, 8, 9"], 1, "range تبدأ من 2 وتزيد 2 وتتوقف قبل 10."],
  ["Chemistry", "What is the value of cycles after execution?", "initial_mass = 100.0\ncurrent_mass = initial_mass\ncycles = 0\nwhile current_mass >= (initial_mass * 0.01):\n    current_mass /= 2\n    cycles += 1\nprint(cycles)", ["6", "7", "8", "5"], 1, "القسمة تحدث 7 مرات حتى تصبح الكتلة أقل من 1."],
  ["Chemistry", "What does the code print?", "pH = 1.0\nvol = 0.0\nwhile pH < 7.0:\n    vol += 0.1\n    pH += 0.05\nprint(vol)", ["12.0", "12.1", "14.0", "7.0"], 0, "نحتاج 120 خطوة، وكل خطوة تضيف 0.1، إذن vol = 12.0."],
  ["Range", "What is the last printed value?", "for T in range(273, 383, 10):\n    print(T)", ["373", "383", "380", "370"], 0, "آخر قيمة قبل 383 بخطوة 10 هي 373."],
  ["Chemistry", "How many wavelengths are in the visible spectrum?", "wavelengths = [250, 400, 550, 700, 850, 1000]\ncount = 0\nfor w in wavelengths:\n    if 380 <= w <= 750:\n        count += 1\nprint(count)", ["2", "3", "4", "5"], 1, "400 و 550 و 700 داخل المدى، إذن العدد 3."],
  ["Chemistry", "What does it print?", "reagent_A = 50.0\nyield_product = 0.0\nwhile reagent_A > 0:\n    consume = min(5.0, reagent_A)\n    reagent_A -= consume\n    yield_product += consume * 2\nprint(yield_product)", ["50.0", "100.0", "25.0", "200.0"], 1, "كل 1 جرام يعطي 2 جرام منتج، وكمية A الكلية 50، الناتج 100."],
  ["Nested If", "What does the code print?", "x = 3\nif x > 2:\n    print(\"A\")\n    if x < 5:\n        print(\"B\")\n    else:\n        print(\"C\")\nelse:\n    print(\"D\")", ["A B", "A C", "A B C", "D"], 0, "x أكبر من 2 وأصغر من 5، لذلك يطبع A ثم B."],
  ["While", "What does the code print?", "i = 1\nwhile i < 10:\n    print(i, end=' ')\n    i += 2", ["1 2 3 4 5 6 7 8 9", "1 3 5 7 9", "1 3 5 7 9 11", "2 4 6 8"], 1, "يزيد i بمقدار 2 ويقف بعد 9 عندما يصبح 11."],
  ["While", "Which represents an infinite while loop?", "", ["while True: print(\"Hi\")", "while 1 < 2: pass", "while x > 0: x -= 1 assuming x = 5", "Both (a) and (b)"], 3, "a و b شروط دائمة الصحة، أما c فتتوقف لأن x تنقص."]
  ,["Lists", "What is the first index in a Python list?", "", ["0", "1", "-1", "Depends on len"], 0, "في Python أول عنصر index بتاعه 0."]
  ,["Lists", "What does the code print?", "items = [10, 20, 30]\nprint(items[1])", ["10", "20", "30", "Error"], 1, "items[1] تعني العنصر الثاني لأن العد يبدأ من 0."]
  ,["Lists", "What does append do?", "numbers = [1, 2]\nnumbers.append(3)\nprint(numbers)", ["[1, 2]", "[3, 1, 2]", "[1, 2, 3]", "Error"], 2, "append تضيف العنصر الجديد في نهاية القائمة."]
  ,["Lists", "What does len(names) return?", "names = ['Ali', 'Mona', 'Omar']\nprint(len(names))", ["2", "3", "4", "names"], 1, "len ترجع عدد عناصر القائمة، وهنا العناصر ثلاثة."]
  ,["Problem Solving", "Which step comes before coding?", "", ["Testing only", "Writing an algorithm", "Printing output", "Installing Python"], 1, "قبل كتابة الكود نفهم المشكلة ونكتب Algorithm أو Pseudocode."]
  ,["Problem Solving", "In IPO, what does Processing mean?", "", ["Data entered by user", "Final result", "Calculations and logic", "Program name"], 2, "Processing هي العمليات والحسابات والشروط التي تحول input إلى output."]
  ,["Logic", "What is the result of True and False?", "", ["True", "False", "Error", "None"], 1, "and تحتاج أن يكون الشرطان True، لذلك النتيجة False."]
  ,["Logic", "What is the result of True or False?", "", ["True", "False", "Error", "None"], 0, "or يكفي فيها شرط واحد True."]
  ,["Loop Patterns", "What is a running total used for?", "", ["Storing one text only", "Accumulating a sum inside a loop", "Stopping a program", "Comparing strings"], 1, "running total يعني متغير يزيد تدريجياً داخل الحلقة لتجميع القيم."]
  ,["Loop Patterns", "What does x += 5 mean?", "", ["x = 5", "x = x + 5", "x = x - 5", "x = x * 5"], 1, "عامل += اختصار للجمع والتخزين في نفس المتغير."]
  ,["Lists", "What does list(range(1, 10, 2)) return?", "", ["[1, 3, 5, 7, 9]", "[1, 3, 5, 7, 9, 10]", "[0, 2, 4, 6, 8]", "[2, 4, 6, 8]"], 0, "تبدأ من 1 وتزيد 2 وتتوقف قبل 10."]
  ,["Lists", "What error happens when using an invalid list index?", "", ["SyntaxError", "RuntimeError", "IndexError", "NameError"], 2, "عند طلب عنصر خارج حدود القائمة يظهر IndexError: list index out of range."]
].map(([topic, question, code, answers, correct, explanation]) => ({ topic, question, code, answers, correct, explanation }));

const doctorQuestions = [
  {
    "topic": "Decision Logic",
    "question": "What is a logical design that controls the order of statement execution?",
    "code": "",
    "answers": [
      "Variable",
      "Control Structure",
      "Data Type",
      "Constant"
    ],
    "correct": 1,
    "explanation": "A control structure controls the order in which statements execute."
  },
  {
    "topic": "Decision Logic",
    "question": "Which Python statement is used to create a single-alternative decision structure?",
    "code": "",
    "answers": [
      "while",
      "for",
      "if",
      "else"
    ],
    "correct": 2,
    "explanation": "The 'if' statement is the basic decision structure."
  },
  {
    "topic": "Decision Logic",
    "question": "Which relational operator means 'Equal to'?",
    "code": "",
    "answers": [
      "=",
      "==",
      "!=",
      "=>"
    ],
    "correct": 1,
    "explanation": "The '==' operator checks if two values are equal."
  },
  {
    "topic": "Decision Logic",
    "question": "How does Python tell where a block of code begins and ends?",
    "code": "",
    "answers": [
      "Curly braces",
      "Parentheses",
      "Indentation",
      "Semicolons"
    ],
    "correct": 2,
    "explanation": "The Python interpreter uses indentation to define blocks."
  },
  {
    "topic": "Decision Logic",
    "question": "Which operator means 'Not equal to'?",
    "code": "",
    "answers": [
      "<>",
      "==",
      "!",
      "!="
    ],
    "correct": 3,
    "explanation": "The '!=' operator checks for inequality."
  },
  {
    "topic": "Decision Logic",
    "question": "What is the result of a Boolean expression?",
    "code": "",
    "answers": [
      "A number",
      "A string",
      "True or False",
      "An error"
    ],
    "correct": 2,
    "explanation": "Boolean expressions evaluate to either true or false."
  },
  {
    "topic": "Decision Logic",
    "question": "Which statement provides a block of code to run only if the condition is false?",
    "code": "",
    "answers": [
      "elif",
      "if",
      "else",
      "then"
    ],
    "correct": 2,
    "explanation": "The else block executes when the if condition is false."
  },
  {
    "topic": "Decision Logic",
    "question": "Which operator is 'Greater than or equal to'?",
    "code": "",
    "answers": [
      "=>",
      ">=",
      "=<",
      "=="
    ],
    "correct": 1,
    "explanation": "The operator is '>='."
  },
  {
    "topic": "Decision Logic",
    "question": "Which structure allows you to test multiple conditions in a row?",
    "code": "",
    "answers": [
      "Sequence",
      "if-elif-else",
      "if-else",
      "for loop"
    ],
    "correct": 1,
    "explanation": "The if-elif-else statement makes nested logic simpler."
  },
  {
    "topic": "Decision Logic",
    "question": "What is the ASCII value of a blank space in memory?",
    "code": "",
    "answers": [
      "48",
      "32",
      "97",
      "0"
    ],
    "correct": 1,
    "explanation": "A blank space is represented by the number 32."
  },
  {
    "topic": "Decision Logic",
    "question": "In the grading scale, what grade is given for 75?",
    "code": "",
    "answers": [
      "B",
      "C",
      "D",
      "F"
    ],
    "correct": 1,
    "explanation": "Scores 70-79 are assigned a grade of 'C'."
  },
  {
    "topic": "Decision Logic",
    "question": "Which function converts user input into a decimal number?",
    "code": "",
    "answers": [
      "int()",
      "str()",
      "float()",
      "bool()"
    ],
    "correct": 2,
    "explanation": "The float() function is used for decimal inputs like salary."
  },
  {
    "topic": "Decision Logic",
    "question": "When comparing strings 'Sami' and 'Samr', which is greater?",
    "code": "",
    "answers": [
      "Sami",
      "Samr",
      "Equal",
      "None"
    ],
    "correct": 1,
    "explanation": "Comparing character codes, 'i' (105) is greater than 'r' (114) was not the case; actually 'r' (114) is greater than 'i' (105). Correct answer based on 'i' vs 'r' logic is Samr. *Correction: Sami is not greater than Samr*."
  },
  {
    "topic": "Decision Logic",
    "question": "A 'Dual Alternative' decision structure uses which clauses?",
    "code": "",
    "answers": [
      "if only",
      "if and else",
      "if and elif",
      "else only"
    ],
    "correct": 1,
    "explanation": "A dual alternative uses both if and else."
  },
  {
    "topic": "Decision Logic",
    "question": "Which digit is represented by number 48 in memory?",
    "code": "",
    "answers": [
      "0",
      "1",
      "9",
      "Space"
    ],
    "correct": 0,
    "explanation": "Digits 0-9 are represented by 48-57."
  },
  {
    "topic": "Decision Logic",
    "question": "To qualify for a loan, salary must be at least:",
    "code": "",
    "answers": [
      "20000",
      "30000",
      "40000",
      "50000"
    ],
    "correct": 1,
    "explanation": "The minimum annual salary is 30,000."
  },
  {
    "topic": "Decision Logic",
    "question": "What grade is given for a score of 62?",
    "code": "",
    "answers": [
      "C",
      "D",
      "F",
      "B"
    ],
    "correct": 1,
    "explanation": "Scores 60-69 are assigned 'D'."
  },
  {
    "topic": "Decision Logic",
    "question": "The 'elif' keyword is short for:",
    "code": "",
    "answers": [
      "extra if",
      "else if",
      "every if",
      "end if"
    ],
    "correct": 1,
    "explanation": "elif is used for multiple nested decisions."
  },
  {
    "topic": "Decision Logic",
    "question": "What happens if all conditions in an if-elif-else are false?",
    "code": "",
    "answers": [
      "Nothing runs",
      "Error occurs",
      "else block runs",
      "First block runs"
    ],
    "correct": 2,
    "explanation": "If all conditions are false, the trailing else executes."
  },
  {
    "topic": "Decision Logic",
    "question": "In Python, string comparisons are based on:",
    "code": "",
    "answers": [
      "String length",
      "ASCII/Unicode",
      "Vowel count",
      "Alphabetical only"
    ],
    "correct": 1,
    "explanation": "Strings are compared by the numeric codes of their characters."
  },
  {
    "topic": "Decision Logic",
    "question": "Which logic structure tests one condition inside another?",
    "code": "",
    "answers": [
      "Sequence",
      "Nested",
      "Loop",
      "Linear"
    ],
    "correct": 1,
    "explanation": "Decision structures can be nested within one another."
  },
  {
    "topic": "Decision Logic",
    "question": "To qualify for a loan, years on job must be at least:",
    "code": "",
    "answers": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correct": 1,
    "explanation": "The minimum years on the job is 2."
  },
  {
    "topic": "Decision Logic",
    "question": "What is the grade for a score of 55?",
    "code": "",
    "answers": [
      "D",
      "F",
      "E",
      "C"
    ],
    "correct": 1,
    "explanation": "Scores below 60 are assigned 'F'."
  },
  {
    "topic": "Decision Logic",
    "question": "Relational operators are also called:",
    "code": "",
    "answers": [
      "Arithmetic",
      "Logical",
      "Comparison",
      "Assignment"
    ],
    "correct": 2,
    "explanation": "They compare values like greater than or equal to."
  },
  {
    "topic": "Decision Logic",
    "question": "The first line of an 'if' statement must end with:",
    "code": "",
    "answers": [
      "A semicolon",
      "A colon",
      "A period",
      "A bracket"
    ],
    "correct": 1,
    "explanation": "The general format is 'if condition:'."
  },
  {
    "topic": "Decision Logic",
    "question": "A decision structure is often called a:",
    "code": "",
    "answers": [
      "Selection structure",
      "Addition structure",
      "Repeat structure",
      "Variable structure"
    ],
    "correct": 0,
    "explanation": "Decision structures are used for selection logic."
  },
  {
    "topic": "Decision Logic",
    "question": "Which error occurs if indentation is inconsistent?",
    "code": "",
    "answers": [
      "SyntaxError",
      "LogicError",
      "IndentationError",
      "RuntimeError"
    ],
    "correct": 2,
    "explanation": "Python requires consistent indentation to define blocks."
  },
  {
    "topic": "Decision Logic",
    "question": "In the graded scale, a 90 results in:",
    "code": "",
    "answers": [
      "A",
      "B",
      "C",
      "S"
    ],
    "correct": 0,
    "explanation": "Scores 90 and above get an 'A'."
  },
  {
    "topic": "Decision Logic",
    "question": "The '!=' operator is the opposite of:",
    "code": "",
    "answers": [
      "=",
      "==",
      ">=",
      "!"
    ],
    "correct": 1,
    "explanation": "Not equal is the logical opposite of equal to."
  },
  {
    "topic": "Decision Logic",
    "question": "Which section in an if-elif-else is optional?",
    "code": "",
    "answers": [
      "The if block",
      "The elif block",
      "The else block",
      "The condition"
    ],
    "correct": 2,
    "explanation": "The trailing else is used for default but can be omitted."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: An 'if' statement condition must evaluate to a Boolean value.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "The condition must be an expression that is true or false."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: In a nested if-else, the inner 'else' belongs to the nearest 'if'.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "Indentation shows which else belongs to which if."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: The characters 'a' and 'A' have the same numeric code in memory.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Different characters have unique numeric codes."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: A sequence structure executes statements in any order.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Sequence structures execute statements in order."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: An 'elif' statement can exist without a preceding 'if'.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "elif is part of a larger if-structure."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: Python's graded scale example can use multiple 'if' statements instead of 'elif'.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "It can, though nested if-else or elif is more efficient."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: If an 'if' condition is true, the 'else' block is skipped.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "Only one branch of a dual-alternative structure executes."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: In string comparisons, lowercase 'a' is numerically greater than uppercase 'A'.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "In ASCII, lowercase letters have higher values than uppercase."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: A Boolean expression can be used outside of an 'if' statement.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "It is simply an expression that is true or false."
  },
  {
    "topic": "Decision Logic",
    "question": "T/F: Indentation in Python is optional if you use semicolons.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Indentation is required by the Python interpreter."
  },
  {
    "topic": "Loops & Lists",
    "question": "What is an object containing multiple data items called in Python?",
    "code": "",
    "answers": [
      "Variable",
      "List",
      "Integer",
      "Operator"
    ],
    "correct": 1,
    "explanation": "A list is an object that contains multiple data items called elements."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which index represents the first element in a list?",
    "code": "",
    "answers": [
      "1",
      "0",
      "-1",
      "First"
    ],
    "correct": 1,
    "explanation": "The first element in a list is at index 0."
  },
  {
    "topic": "Loops & Lists",
    "question": "What loop executes a specific number of times?",
    "code": "",
    "answers": [
      "While loop",
      "For loop",
      "If statement",
      "Switch"
    ],
    "correct": 1,
    "explanation": "The for loop repeats a specific number of times, such as for a class of ten."
  },
  {
    "topic": "Loops & Lists",
    "question": "Each item stored in a list is called an:",
    "code": "",
    "answers": [
      "Item",
      "Factor",
      "Element",
      "Member"
    ],
    "correct": 2,
    "explanation": "Each item stored in a list is called an element."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which function returns the number of elements in a list?",
    "code": "",
    "answers": [
      "count()",
      "size()",
      "total()",
      "len()"
    ],
    "correct": 3,
    "explanation": "The len function returns the number of elements in a list."
  },
  {
    "topic": "Loops & Lists",
    "question": "What should 'total' be initialized to for summing grades?",
    "code": "",
    "answers": [
      "1.0",
      "100.0",
      "0.0",
      "-1.0"
    ],
    "correct": 2,
    "explanation": "The total is initialized to 0.0 before the summation loop."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which symbol defines the boundaries of a list?",
    "code": "",
    "answers": [
      "()",
      "{}",
      "[]",
      "<>"
    ],
    "correct": 2,
    "explanation": "Lists are defined using square brackets."
  },
  {
    "topic": "Loops & Lists",
    "question": "To repeat 'range(10)', the loop runs how many times?",
    "code": "",
    "answers": [
      "9",
      "10",
      "11",
      "Infinite"
    ],
    "correct": 1,
    "explanation": "Range(10) holds a series of values that allow 10 iterations."
  },
  {
    "topic": "Loops & Lists",
    "question": "What is a list that can be modified called?",
    "code": "",
    "answers": [
      "Constant",
      "Mutable",
      "Static",
      "Locked"
    ],
    "correct": 1,
    "explanation": "Lists are mutable, meaning their elements can be changed."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which operator joins two lists together?",
    "code": "",
    "answers": [
      "*",
      "+",
      "&",
      "++"
    ],
    "correct": 1,
    "explanation": "The + operator performs list concatenation."
  },
  {
    "topic": "Loops & Lists",
    "question": "To find the lowest grade, initialize 'min' to:",
    "code": "",
    "answers": [
      "0",
      "101",
      "-1",
      "50"
    ],
    "correct": 1,
    "explanation": "Min is initialized to a value higher than any possible grade."
  },
  {
    "topic": "Loops & Lists",
    "question": "What is the output of len([5, 10, 15, 20])?",
    "code": "",
    "answers": [
      "3",
      "4",
      "5",
      "20"
    ],
    "correct": 1,
    "explanation": "The function returns the total count of elements."
  },
  {
    "topic": "Loops & Lists",
    "question": "What occurs if you access list index 5 for a 4-item list?",
    "code": "",
    "answers": [
      "SyntaxError",
      "IndexError",
      "ZeroError",
      "Success"
    ],
    "correct": 1,
    "explanation": "An IndexError exception is raised for invalid indexes."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which loop is best for iterating over a known list?",
    "code": "",
    "answers": [
      "While loop",
      "For loop",
      "If loop",
      "Do loop"
    ],
    "correct": 1,
    "explanation": "The for loop is very useful for iterating over a list."
  },
  {
    "topic": "Loops & Lists",
    "question": "To find the highest grade, initialize 'max' to:",
    "code": "",
    "answers": [
      "100",
      "-1",
      "0",
      "101"
    ],
    "correct": 1,
    "explanation": "Max is initialized to a value lower than any possible grade."
  },
  {
    "topic": "Loops & Lists",
    "question": "A list slice '[1:3]' returns elements at which indexes?",
    "code": "",
    "answers": [
      "1, 2, 3",
      "1 and 2",
      "1, 2, 4",
      "Only 3"
    ],
    "correct": 1,
    "explanation": "Slices exclude the end index, returning start up to end-1."
  },
  {
    "topic": "Loops & Lists",
    "question": "The '*' operator applied to a list results in:",
    "code": "",
    "answers": [
      "Multiplication",
      "Addition",
      "Repetition",
      "Deletion"
    ],
    "correct": 2,
    "explanation": "The * operator performs list repetition."
  },
  {
    "topic": "Loops & Lists",
    "question": "To convert a range to a list, use:",
    "code": "",
    "answers": [
      "convert()",
      "list()",
      "set()",
      "array()"
    ],
    "correct": 1,
    "explanation": "The list() function can convert iterables to lists."
  },
  {
    "topic": "Loops & Lists",
    "question": "Grade average equals total sum divided by:",
    "code": "",
    "answers": [
      "Maximum value",
      "Item count",
      "Minimum value",
      "Total sum"
    ],
    "correct": 1,
    "explanation": "Average is the sum divided by the number of students."
  },
  {
    "topic": "Loops & Lists",
    "question": "Can a Python list hold a string and an integer?",
    "code": "",
    "answers": [
      "Yes",
      "No",
      "Only strings",
      "Only integers"
    ],
    "correct": 0,
    "explanation": "Lists can hold items of different types simultaneously."
  },
  {
    "topic": "Loops & Lists",
    "question": "What keyword checks if an item is in a list?",
    "code": "",
    "answers": [
      "is",
      "at",
      "in",
      "has"
    ],
    "correct": 2,
    "explanation": "The 'in' operator determines if an item exists in a list."
  },
  {
    "topic": "Loops & Lists",
    "question": "A slice '[:2]' starts at which index?",
    "code": "",
    "answers": [
      "1",
      "0",
      "2",
      "Last"
    ],
    "correct": 1,
    "explanation": "If start is omitted, it defaults to 0."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which function allows user data entry?",
    "code": "",
    "answers": [
      "get()",
      "read()",
      "input()",
      "scan()"
    ],
    "correct": 2,
    "explanation": "The input() function prompts the user for data."
  },
  {
    "topic": "Loops & Lists",
    "question": "To process numbers, wrap 'input()' with:",
    "code": "",
    "answers": [
      "str()",
      "int()",
      "float()",
      "bool()"
    ],
    "correct": 1,
    "explanation": "Input must be converted to an integer for math."
  },
  {
    "topic": "Loops & Lists",
    "question": "What updates the 'max' variable in a loop?",
    "code": "",
    "answers": [
      "if grade < max",
      "if grade > max",
      "total + grade",
      "max = 0"
    ],
    "correct": 1,
    "explanation": "Update max if the current grade is larger."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which index is the second element?",
    "code": "",
    "answers": [
      "0",
      "1",
      "2",
      "-1"
    ],
    "correct": 1,
    "explanation": "The second element is at index 1."
  },
  {
    "topic": "Loops & Lists",
    "question": "To avoid IndexError in a while loop, use:",
    "code": "",
    "answers": [
      "total()",
      "size()",
      "len()",
      "max()"
    ],
    "correct": 2,
    "explanation": "len() prevents invalid index access in loops."
  },
  {
    "topic": "Loops & Lists",
    "question": "Incrementing 'index += 1' in a while loop:",
    "code": "",
    "answers": [
      "Multiplies the list",
      "Prevents infinite loops",
      "Deletes elements",
      "Calculates sum"
    ],
    "correct": 1,
    "explanation": "Incrementing allows traversal and prevents infinite cycles."
  },
  {
    "topic": "Loops & Lists",
    "question": "A list slice '[2:]' goes until:",
    "code": "",
    "answers": [
      "Index 2",
      "The start",
      "The end",
      "Index 0"
    ],
    "correct": 2,
    "explanation": "If end is omitted, it goes to the end of the list."
  },
  {
    "topic": "Loops & Lists",
    "question": "Python list items are separated by:",
    "code": "",
    "answers": [
      "Dots",
      "Spaces",
      "Commas",
      "Semicolons"
    ],
    "correct": 2,
    "explanation": "Elements in a list are separated by commas."
  },
  {
    "topic": "Loops & Lists",
    "question": "A list of grades [80, 90] has length:",
    "code": "",
    "answers": [
      "1",
      "2",
      "80",
      "90"
    ],
    "correct": 1,
    "explanation": "Length is the count of elements in the list."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which list is empty?",
    "code": "",
    "answers": [
      "[0]",
      "[]",
      "['']",
      "None"
    ],
    "correct": 1,
    "explanation": "An empty list contains no elements."
  },
  {
    "topic": "Loops & Lists",
    "question": "To update 'total' in a loop, use:",
    "code": "",
    "answers": [
      "total * grade",
      "total + grade",
      "total / 10",
      "total - grade"
    ],
    "correct": 1,
    "explanation": "Summation requires adding the current item to the total."
  },
  {
    "topic": "Loops & Lists",
    "question": "Accessing 'my_list[-1]' usually returns:",
    "code": "",
    "answers": [
      "First element",
      "Last element",
      "Error",
      "Null"
    ],
    "correct": 1,
    "explanation": "Negative indexing is often used for end-relative access."
  },
  {
    "topic": "Loops & Lists",
    "question": "Iteration refers to:",
    "code": "",
    "answers": [
      "Data storage",
      "Repetitive execution",
      "Memory allocation",
      "Code deletion"
    ],
    "correct": 1,
    "explanation": "Iteration involves repeating a block of instructions."
  },
  {
    "topic": "Loops & Lists",
    "question": "A list with 10 items has max index:",
    "code": "",
    "answers": [
      "10",
      "9",
      "11",
      "0"
    ],
    "correct": 1,
    "explanation": "Maximum index is always length - 1."
  },
  {
    "topic": "Loops & Lists",
    "question": "Which operator checks if 'A' is lower than 'B'?",
    "code": "",
    "answers": [
      ">",
      "<",
      "==",
      "!="
    ],
    "correct": 1,
    "explanation": "The '<' operator is used for 'less than' checks."
  },
  {
    "topic": "Loops & Lists",
    "question": "Calculation of average happens:",
    "code": "",
    "answers": [
      "Before the loop",
      "Inside the loop",
      "After the loop",
      "Never"
    ],
    "correct": 2,
    "explanation": "Average is calculated once the total sum is complete."
  },
  {
    "topic": "Loops & Lists",
    "question": "Updating 'min' requires:",
    "code": "",
    "answers": [
      "if grade > min",
      "if grade < min",
      "min = 101",
      "total / 10"
    ],
    "correct": 1,
    "explanation": "Update min if the current grade is smaller."
  },
  {
    "topic": "Loops & Lists",
    "question": "List concatenation produces:",
    "code": "",
    "answers": [
      "A single number",
      "A new list",
      "An error",
      "A string"
    ],
    "correct": 1,
    "explanation": "Joining lists creates a combined new list."
  },
  {
    "topic": "Loops & Lists",
    "question": "What happens if 'min' is initialized to 0?",
    "code": "",
    "answers": [
      "It finds lowest",
      "Min stays 0",
      "Error occurs",
      "Logic is correct"
    ],
    "correct": 1,
    "explanation": "If min is 0, no positive grade will ever be smaller than it."
  },
  {
    "topic": "Loops & Lists",
    "question": "Why use 'while' over 'for' for lists?",
    "code": "",
    "answers": [
      "It is faster",
      "Manual index control",
      "Uses less RAM",
      "Handles strings"
    ],
    "correct": 1,
    "explanation": "While loops require manual index management."
  },
  {
    "topic": "Loops & Lists",
    "question": "Slicing with invalid step results in:",
    "code": "",
    "answers": [
      "Empty list",
      "Value error",
      "First element",
      "Full list"
    ],
    "correct": 1,
    "explanation": "Specific slice parameters must be valid integers."
  },
  {
    "topic": "Loops & Lists",
    "question": "Initializing 'max' to 100 for grades:",
    "code": "",
    "answers": [
      "Always works",
      "May fail",
      "Is best",
      "Is standard"
    ],
    "correct": 1,
    "explanation": "If all grades are below 100, max will incorrectly stay 100."
  },
  {
    "topic": "Loops & Lists",
    "question": "Mutable property allows:",
    "code": "",
    "answers": [
      "Renaming the list",
      "In-place changes",
      "Adding strings",
      "Deleting the file"
    ],
    "correct": 1,
    "explanation": "Mutable objects allow changing elements without creating new ones."
  },
  {
    "topic": "Loops & Lists",
    "question": "Loop 'range(1, 5)' iterates how many times?",
    "code": "",
    "answers": [
      "5",
      "4",
      "6",
      "1"
    ],
    "correct": 1,
    "explanation": "Range starts at 1 and goes up to, but not including, 5."
  },
  {
    "topic": "Loops & Lists",
    "question": "Effect of 'my_list * 3' on memory:",
    "code": "",
    "answers": [
      "Triples elements",
      "Cubed values",
      "No change",
      "Deletes data"
    ],
    "correct": 0,
    "explanation": "Repetition creates a new list with repeated content."
  },
  {
    "topic": "Loops & Lists",
    "question": "Logic for 'if (grade > max)' inside 'for' loop:",
    "code": "",
    "answers": [
      "Finds average",
      "Finds largest",
      "Sums items",
      "Exits loop"
    ],
    "correct": 1,
    "explanation": "This is the standard algorithm for finding an extreme value."
  },
  {
    "topic": "Loops & Lists",
    "question": "Accessing index 'len(list)' results in:",
    "code": "",
    "answers": [
      "Last element",
      "First element",
      "IndexError",
      "Zero"
    ],
    "correct": 2,
    "explanation": "The length is one higher than the maximum valid index."
  },
  {
    "topic": "Loops & Lists",
    "question": "Digital transformation utilizes loops for:",
    "code": "",
    "answers": [
      "Manual entry",
      "Automated processing",
      "Hardware cooling",
      "Data deletion"
    ],
    "correct": 1,
    "explanation": "Loops automate repetitive data tasks like grade analysis."
  },
  {
    "topic": "Output Analysis",
    "question": "What is the output of the following code?",
    "code": "x = 10\ny = 5\nif x > y and x < 15:\n    print('Safe')\nelse:\n    print('Danger')",
    "answers": [
      "Safe",
      "Danger",
      "10",
      "Error"
    ],
    "correct": 0,
    "explanation": "Both conditions (10 > 5) and (10 < 15) are True, so the 'if' block executes."
  },
  {
    "topic": "Output Analysis",
    "question": "Analyze the list operation and predict the output:",
    "code": "my_list = [10, 20, 30]\nmy_list[1] = 50\nprint(my_list)",
    "answers": [
      "[50, 20, 30]",
      "[10, 50, 30]",
      "[10, 20, 50]",
      "Error"
    ],
    "correct": 1,
    "explanation": "Lists are mutable. Index 1 refers to the second element, which is updated from 20 to 50."
  },
  {
    "topic": "Output Analysis",
    "question": "What will be printed after this loop finishes?",
    "code": "total = 0\nfor i in [1, 2, 3]:\n    total = total + i\nprint(total)",
    "answers": [
      "3",
      "123",
      "6",
      "0"
    ],
    "correct": 2,
    "explanation": "The loop sums the elements: 0 + 1 + 2 + 3 = 6."
  },
  {
    "topic": "Output Analysis",
    "question": "What is the output of this conditional slice?",
    "code": "nums = [5, 10, 15, 20, 25]\nprint(nums[1:3])",
    "answers": [
      "[10, 15, 20]",
      "[5, 10]",
      "[10, 15]",
      "[15, 20]"
    ],
    "correct": 2,
    "explanation": "Slicing [start:end] includes the start index but excludes the end index. This grabs indexes 1 and 2."
  },
  {
    "topic": "Output Analysis",
    "question": "Determine the output of this nested logic:",
    "code": "a = 100\nb = 200\nif a > 150:\n    print('High')\nelif b > 150:\n    print('Medium')\nelse:\n    print('Low')",
    "answers": [
      "High",
      "Medium",
      "Low",
      "Error"
    ],
    "correct": 1,
    "explanation": "The first condition (100 > 150) is False. The second (200 > 150) is True, so 'Medium' is printed."
  }
];

const doctorReviewQuestions = [
  {
    "topic": "Loops",
    "question": "The while loop is a ---------------- type of loop.",
    "code": "",
    "answers": [
      "Pretest",
      "Post-test",
      "Prequalified",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "while checks the condition before running the body, so it is a pretest loop."
  },
  {
    "topic": "Operators",
    "question": "The += operator is an example of a(n) ---------------- operator.",
    "code": "",
    "answers": [
      "Relational assignment",
      "Complex assignment",
      "Augmented assignment",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "x += 1 is short for x = x + 1, so it is augmented assignment."
  },
  {
    "topic": "Decision",
    "question": "The ----------- statement causes one or more statements to execute only when a Boolean expression is -----------.",
    "code": "",
    "answers": [
      "Else, false",
      "If, true",
      "If, false",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "An if statement executes its block only when the condition is true."
  },
  {
    "topic": "Lists",
    "question": "This is a number that identifies an item in a list.",
    "code": "",
    "answers": [
      "Index",
      "Element",
      "Identifier",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "The index is the position number of an item in a list."
  },
  {
    "topic": "Precedence",
    "question": "Which of these have highest precedence?",
    "code": "",
    "answers": [
      "*",
      "/",
      "**",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Exponentiation ** has higher precedence than multiplication and division."
  },
  {
    "topic": "Print",
    "question": "Select the output of the following code:",
    "code": "print('h', '-', 'r', 'u', sep='-')",
    "answers": [
      "h---r-u",
      "h--r-u",
      "h-r-u",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "sep='-' is inserted between all values. Since one value is already '-', the output becomes h---r-u."
  },
  {
    "topic": "Expressions",
    "question": "If A = 18 and B = 14, evaluate the expression: A % B // 16",
    "code": "A = 18\nB = 14\nA % B // 16",
    "answers": [
      "0.25",
      "0",
      "1",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "18 % 14 = 4, then 4 // 16 = 0."
  },
  {
    "topic": "Expressions",
    "question": "What is the output of the following expression?",
    "code": "print(7 / (4 + 3.0))",
    "answers": [
      "1",
      "1.0",
      "Error",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "4 + 3.0 = 7.0, and 7 / 7.0 gives 1.0."
  },
  {
    "topic": "Operators",
    "question": "In the expression 12 + 7, the values on the right and left of the + symbol are called -----------.",
    "code": "12 + 7",
    "answers": [
      "Operators",
      "Operands",
      "Math expressions",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "The operator is +, and the values it works on are operands."
  },
  {
    "topic": "Control Structures",
    "question": "A logical design that controls the order in which a set of statements execute is called a ----.",
    "code": "",
    "answers": [
      "Control structure",
      "Logical structure",
      "Sequence structure",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "A control structure controls execution order."
  },
  {
    "topic": "Expressions",
    "question": "What is the value of the following expression?",
    "code": "24 % 6 % 3, 26 / 3 // 3",
    "answers": [
      "(0, 2)",
      "(0, 3)",
      "(1, 2)",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "24 % 6 = 0 and 0 % 3 = 0. In exact Python output, 26 / 3 // 3 gives 2.0; the exam option writes it as 2."
  },
  {
    "topic": "Strings",
    "question": "When a program compares characters, it actually compares the ------------ codes.",
    "code": "",
    "answers": [
      "Binary",
      "ASCII",
      "Numeric",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "The course reference uses ASCII codes for character comparison."
  },
  {
    "topic": "Lists",
    "question": "What is the value of num if: num = list(range(0, 6, 2))",
    "code": "num = list(range(0, 6, 2))",
    "answers": [
      "[0, 2, 4]",
      "[0, 2, 4, 6]",
      "[0, 6, 2]",
      "None of the Above"
    ],
    "correct": 0,
    "explanation": "range(0, 6, 2) starts at 0, adds 2, and stops before 6."
  },
  {
    "topic": "Boolean",
    "question": "Which of the following Boolean expressions is NOT logically equivalent to the other three?",
    "code": "",
    "answers": [
      "-7>=0 and -7<=12",
      "not(-7<0 or -7>12)",
      "not(-7>12 or -7==12)",
      "not(-7<12 or -7==12)"
    ],
    "correct": 2,
    "explanation": "a, b, and d evaluate to False. c evaluates to True, so it is not equivalent."
  },
  {
    "topic": "Boolean",
    "question": "A ------------ is a Boolean variable that signals when some condition exists in the program.",
    "code": "",
    "answers": [
      "Signal",
      "Sentinel",
      "Flag",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "A flag is a Boolean variable used to signal a condition."
  },
  {
    "topic": "Translators",
    "question": "A(n) -------- program translates a high-level language program into a separate machine language program.",
    "code": "",
    "answers": [
      "Assembler",
      "Compiler",
      "Translator",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "A compiler translates a whole high-level program into a separate machine-language program."
  },
  {
    "topic": "Machine Language",
    "question": "Computers can only execute programs that are written in ---------.",
    "code": "",
    "answers": [
      "Machine language",
      "High-level language",
      "Pseudocode",
      "Python"
    ],
    "correct": 0,
    "explanation": "The CPU directly executes machine language instructions."
  },
  {
    "topic": "Loops",
    "question": "Which of the following is a count-controlled loop?",
    "code": "",
    "answers": [
      "While",
      "Do-while",
      "For",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "A for loop is commonly used when the number of iterations is known."
  },
  {
    "topic": "Syntax",
    "question": "The rules that must be followed when writing a program are called -----------.",
    "code": "",
    "answers": [
      "Syntax",
      "Operators",
      "Key words",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "Syntax means the grammar/rules of the programming language."
  },
  {
    "topic": "Loops",
    "question": "A variable used to calculate the number of iterations of a loop is called a(n) ------------.",
    "code": "",
    "answers": [
      "Incrementor",
      "Counter",
      "Controller",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "A counter counts loop iterations or repeated events."
  },
  {
    "topic": "Lists",
    "question": "What is the value of X if: L=[2, 4, 6, 8] and X = L[L[2] // 2 - L[1]]",
    "code": "L = [2, 4, 6, 8]\nX = L[L[2] // 2 - L[1]]",
    "answers": [
      "2",
      "0",
      "8",
      "None of the Above"
    ],
    "correct": 2,
    "explanation": "L[2] = 6, 6 // 2 = 3, L[1] = 4, so index = -1. L[-1] is 8."
  },
  {
    "topic": "Lists",
    "question": "This is the last index in a list.",
    "code": "",
    "answers": [
      "0",
      "List size",
      "List size - 1",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Indexes start at 0, so the last index is length - 1."
  },
  {
    "topic": "Lists",
    "question": "This will happen if you try to use an index that is out of range for a list.",
    "code": "",
    "answers": [
      "Nothing",
      "Syntax Error",
      "IndexError",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Python raises IndexError when a list index is outside the valid range."
  },
  {
    "topic": "Lists",
    "question": "Suppose listExample is ['h','e','l','l','o'], what is len(listExample)?",
    "code": "listExample = ['h','e','l','l','o']\nlen(listExample)",
    "answers": [
      "5",
      "4",
      "Error",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "The list has five elements."
  },
  {
    "topic": "Lists",
    "question": "Suppose list = [2, 33, 222, 14, 7], what is value of list[1:4:2]?",
    "code": "list = [2, 33, 222, 14, 7]\nlist[1:4:2]",
    "answers": [
      "[2, 222]",
      "[33, 14]",
      "[7]",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "Start at index 1, stop before index 4, step 2: indexes 1 and 3 -> [33, 14]."
  },
  {
    "topic": "Lists",
    "question": "Suppose numList is [3, 2, 1], what is numList * 2?",
    "code": "numList = [3, 2, 1]\nnumList * 2",
    "answers": [
      "[9, 6, 3]",
      "[3, 2, 1], [3, 2, 1]",
      "[3, 2, 1, 3, 2, 1]",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Multiplying a list repeats its elements."
  },
  {
    "topic": "Comments",
    "question": "This symbol marks the beginning of a comment in Python.",
    "code": "",
    "answers": [
      "||",
      "//",
      "#",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Python comments start with #."
  },
  {
    "topic": "Lists",
    "question": "If L1=[1, 2, 3] and L2=[3, 2, 1] then L1 + L2 = ....................",
    "code": "L1 = [1, 2, 3]\nL2 = [3, 2, 1]\nL1 + L2",
    "answers": [
      "[4, 4, 4]",
      "[1, 2, 3, 2, 1]",
      "[1, 2, 3], [3, 2, 1]",
      "None of the Above"
    ],
    "correct": 3,
    "explanation": "List + concatenates lists: [1, 2, 3, 3, 2, 1], which is not shown."
  },
  {
    "topic": "Operators",
    "question": "Which of the following operators has its associativity from right to left?",
    "code": "",
    "answers": [
      "%",
      "++",
      "**",
      "None of The Above"
    ],
    "correct": 2,
    "explanation": "Exponentiation ** groups from right to left in Python."
  },
  {
    "topic": "Keywords",
    "question": "Which of the following is a python keyword?",
    "code": "",
    "answers": [
      "Else",
      "Whil",
      "Prints",
      "None of the Above"
    ],
    "correct": 3,
    "explanation": "Python keywords are case-sensitive: else is a keyword, but Else is not."
  },
  {
    "topic": "Type Conversion",
    "question": "What is the value of the expression: float(7 + int(13.5)%3)",
    "code": "float(7 + int(13.5) % 3)",
    "answers": [
      "8.0",
      "8",
      "Error",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "int(13.5)=13, 13%3=1, 7+1=8, float(8)=8.0."
  },
  {
    "topic": "Decision",
    "question": "You use a(n) ------------ statement to write a dual alternative decision structure.",
    "code": "",
    "answers": [
      "If statement",
      "If-else statement",
      "If-call statement",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "A dual alternative decision has two paths: if and else."
  },
  {
    "topic": "Boolean",
    "question": "A compound Boolean expression created with the -------------- operator is true if either one of its subexpressions is true.",
    "code": "",
    "answers": [
      "Or",
      "Not",
      "And",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "or is true when at least one subexpression is true."
  },
  {
    "topic": "Expressions",
    "question": "What is the value of the expression: 3 + 4 ** 2 // 12",
    "code": "3 + 4 ** 2 // 12",
    "answers": [
      "0",
      "4",
      "3",
      "None of The Above"
    ],
    "correct": 1,
    "explanation": "4**2=16, 16//12=1, then 3+1=4."
  },
  {
    "topic": "Expressions",
    "question": "What is the value of X if: X = 3 + 9 * ((4 * 11) - 4) / 10",
    "code": "X = 3 + 9 * ((4 * 11) - 4) / 10",
    "answers": [
      "39.0",
      "35.0",
      "35",
      "None of The Above"
    ],
    "correct": 0,
    "explanation": "4*11=44, 44-4=40, 9*40/10=36.0, then 3+36.0=39.0."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "for i in range(0):\n    print(i)",
    "answers": [
      "No output",
      "Error",
      "0",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "range(0) has no values, so the loop body does not run."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "for i in range(2.0):\n    print(i)",
    "answers": [
      "0.0 1.0",
      "Error",
      "0 1",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "range() requires integers. 2.0 is a float, so Python raises TypeError."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "x = 'abcd'\nfor i in range(len(x)):\n    x = 'a'\n    print(x)",
    "answers": [
      "a a a a",
      "abcd abcd abcd abcd",
      "Error",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "range(len(x)) is evaluated first as range(4). Each iteration sets x to a and prints it."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "x = 'aaaa'\nfor i in range(len(x)):\n    print(x, end=' ')\n    x = 'a'",
    "answers": [
      "aaaaaaaa",
      "aaaa aaaa aaaa aaaa",
      "aaaa a a a",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "First print uses original x = aaaa, then x becomes a for the next three prints."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following code?",
    "code": "i = 4\nwhile True:\n    if i % 3 == 0:\n        print(i)\n    i -= 2",
    "answers": [
      "4 2",
      "4",
      "4 2 0 -1 .......",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "The loop is infinite and prints 0, -6, -12, ... . None of the listed outputs matches."
  },
  {
    "topic": "Syntax",
    "question": "What is the output of the following?",
    "code": "if (9 < 0) and (0 < -9):\n    print(\"hello\")\nelif (9 > 0) or False:\n    print(\"good\")\nelif\n    print(\"bad\")",
    "answers": [
      "bad",
      "hello",
      "good",
      "Error"
    ],
    "correct": 3,
    "explanation": "The last elif has no condition and no colon, so the code has a syntax error."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "x = \"abcdef\"\ni = \"c\"\nwhile i in x:\n    print(i, end=\" \")",
    "answers": [
      "No Output",
      "c c c c c c c c .....",
      "a b c d e f",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "i remains c forever, and c is in x, so the loop prints c endlessly."
  },
  {
    "topic": "Loops",
    "question": "What is the output of the following?",
    "code": "x = \"abcdef\"\ni = \"a\"\nwhile i in x:\n    print(i, end=\" \")",
    "answers": [
      "No Output",
      "a a a a a a a a .....",
      "a b c d e f",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "i remains 'a', and 'a' is in x, so the loop prints a endlessly."
  },
  {
    "topic": "Loops",
    "question": "Which numbers are printed?",
    "code": "for i in range(3):\n    print(i-1)\nfor i in range(3,3):\n    print(i+1)",
    "answers": [
      "1, 0, 1",
      "0, 1, 2, 3",
      "1, 0, 1, 1",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "The first loop prints -1, 0, 1. The second loop prints nothing, so none of the options is exact."
  },
  {
    "topic": "Syntax",
    "question": "What is the output of the following code?",
    "code": "False = True\nwhile False:\n    print(True)\n    break",
    "answers": [
      "True",
      "None",
      "Error",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "False is a Python keyword/constant and cannot be assigned to."
  },
  {
    "topic": "Expressions",
    "question": "What is the value in res?",
    "code": "num1 = 30\nnum2 = 60\nres = (num1 + num2) // 4",
    "answers": [
      "22.5",
      "22",
      "22.0",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "30+60=90, and 90//4 = 22."
  },
  {
    "topic": "Lists",
    "question": "What gets printed?",
    "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nprint(numbers[-6:6])",
    "answers": [
      "[3, 4, 5, 6]",
      "[3, 4, 5, 6, 7]",
      "Error",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "-6 points to index 2. The stop index 6 is excluded, so the slice is [3,4,5,6]."
  },
  {
    "topic": "Type Conversion",
    "question": "What is the value of x if: x = int(35.45 + 3/3 - 0.5)",
    "code": "x = int(35.45 + 3/3 - 0.5)",
    "answers": [
      "15.38",
      "35",
      "Error",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "3/3=1.0, so the value is int(35.95), which becomes 35."
  },
  {
    "topic": "Expressions",
    "question": "What is the output of this expression: 4 * 1 ** 2",
    "code": "4 * 1 ** 2",
    "answers": [
      "4",
      "16",
      "Error",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "1**2=1, then 4*1=4."
  },
  {
    "topic": "True/False",
    "question": "The statement print('G','J','P','R', end='@') will display GJPR@ on screen.",
    "code": "print('G','J','P','R', end='@')",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "Default sep is a space, so it displays G J P R@, not GJPR@."
  },
  {
    "topic": "True/False",
    "question": "A logical design that controls the order in which a set of statements execute is called a sequence structure.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "That definition is control structure, not specifically sequence structure."
  },
  {
    "topic": "True/False",
    "question": "The value of the expressions 4/(3*(2-1)) and 4/3*(2-1) is the same.",
    "code": "4/(3*(2-1))\n4/3*(2-1)",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "Both expressions evaluate to 4/3, approximately 1.333."
  },
  {
    "topic": "True/False",
    "question": "Mathematical operations can be performed on a string.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "In this course context, mathematical arithmetic is for numeric values, not strings."
  },
  {
    "topic": "True/False",
    "question": "Operators with the same precedence are evaluated from Left to Right.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "This is not always true in Python. Most same-precedence operators go left to right, but ** is evaluated right to left."
  },
  {
    "topic": "True/False",
    "question": "The expression 6.0 + float(6) is an example of type conversion.",
    "code": "6.0 + float(6)",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "float(6) converts the integer 6 to 6.0."
  },
  {
    "topic": "True/False",
    "question": "Remainder python operator (%) can be applied to all types of numbers.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "The % operator works with integers and floats, but not every numeric type in Python. For example, it does not work with complex numbers."
  },
  {
    "topic": "True/False",
    "question": "The expression 2**2**3 is evaluates as: (2**2)**3.",
    "code": "2**2**3",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "** is right-associative, so 2**2**3 means 2**(2**3)."
  },
  {
    "topic": "True/False",
    "question": "A condition-controlled loop always repeats a specific number of times.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "A condition-controlled loop repeats while a condition is true, not for a guaranteed specific count."
  },
  {
    "topic": "True/False",
    "question": "A bit is enough memory to store a letter of the alphabet or a small number.",
    "code": "",
    "answers": [
      "True",
      "False"
    ],
    "correct": 1,
    "explanation": "A bit stores only 0 or 1. A byte is commonly used for a character or small numeric code."
  }
];

const sheetItems = [
  ["لا تنسى", ["print بحروف صغيرة.", "النصوص داخل quotes.", "input ترجع string.", "استخدم == للمقارنة و = للتخزين."]],
  ["Problem Solving", ["افهم المشكلة قبل الكود.", "IPO = Input, Processing, Output.", "Algorithm خطوات الحل.", "اختبر الناتج وعدل الأخطاء."]],
  ["أرقام سريعة", ["5 / 2 = 2.5", "5 // 2 = 2", "17 % 3 = 2", "2 ** 3 ** 2 = 512"]],
  ["Boolean", ["and تحتاج كل الشروط True.", "or يكفي شرط واحد True.", "not تعكس النتيجة.", "else تتبع أقرب if بنفس مستوى indentation."]],
  ["الحلقات", ["for لما عدد التكرارات معروف.", "while لما التوقف بشرط.", "range لا تشمل stop.", "running total يبدأ غالباً من 0.", "nested loop يعني حلقة داخل حلقة."]],
  ["List", ["تبدأ من index 0.", "list[-1] آخر عنصر.", "list(range(5)) تحول range إلى list.", "[0] * 5 تكرر العنصر.", "len(list) يحميك من IndexError."]],
  ["الأخطاء", ["Syntax: كتابة خاطئة.", "Runtime: يحدث أثناء التشغيل.", "Semantic: نتيجة منطقية غلط.", "indentation مهم جداً في Python."]]
];

let activeLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem("completedLessons") || "[]"));
let currentQuestion = 0;
let answersState = Array(quiz.length).fill(null);
let currentDoctorQuestion = 0;
let doctorAnswersState = Array(doctorQuestions.length).fill(null);
let currentDoctorReviewQuestion = 0;
let doctorReviewAnswersState = Array(doctorReviewQuestions.length).fill(null);
let wrongQuestionKeys = new Set(JSON.parse(localStorage.getItem("wrongQuestionKeys") || "[]"));
let favoriteQuestionKeys = new Set(JSON.parse(localStorage.getItem("favoriteQuestionKeys") || "[]"));

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isOperatorAnswer(value) {
  return /^(?:[<>]=?|=[<>]|={1,2}|!={1}|=>|=<|\/\/|\/|\*\*|\+|-|%|\[\])$/.test(String(value).trim());
}

function formatAnswerText(value) {
  const text = String(value);
  return isOperatorAnswer(text) ? `<code class="inline-op">${escapeHtml(text)}</code>` : escapeHtml(text);
}

function questionKey(type, index) {
  return `${type}:${index}`;
}

function getQuestionByKey(key) {
  const [type, rawIndex] = key.split(":");
  const index = Number(rawIndex);
  const bank = type === "doctor" ? doctorQuestions : type === "doctorReview" ? doctorReviewQuestions : quiz;
  const question = bank[index];
  return question ? { type, index, question } : null;
}

function persistSavedQuestions() {
  localStorage.setItem("wrongQuestionKeys", JSON.stringify([...wrongQuestionKeys]));
  localStorage.setItem("favoriteQuestionKeys", JSON.stringify([...favoriteQuestionKeys]));
}

function updateFavoriteButtons() {
  const quizFavorite = $("#toggleFavorite");
  if (quizFavorite) {
    const saved = favoriteQuestionKeys.has(questionKey("quiz", currentQuestion));
    quizFavorite.textContent = saved ? "إزالة من المفضلة" : "حفظ في المفضلة";
  }

  const doctorFavorite = $("#toggleDoctorFavorite");
  if (doctorFavorite) {
    const saved = favoriteQuestionKeys.has(questionKey("doctor", currentDoctorQuestion));
    doctorFavorite.textContent = saved ? "إزالة من المفضلة" : "حفظ في المفضلة";
  }

  const doctorReviewFavorite = $("#toggleDoctorReviewFavorite");
  if (doctorReviewFavorite) {
    const saved = favoriteQuestionKeys.has(questionKey("doctorReview", currentDoctorReviewQuestion));
    doctorReviewFavorite.textContent = saved ? "إزالة من المفضلة" : "حفظ في المفضلة";
  }
}

function renderStats() {
  $("#lessonCount").textContent = lessons.length;
  $("#questionCount").textContent = quiz.length + doctorQuestions.length + doctorReviewQuestions.length;
  $("#labCount").textContent = labs.length;
  const doctorCount = $("#doctorQuestionCount");
  if (doctorCount) doctorCount.textContent = doctorQuestions.length;
  const doctorReviewCount = $("#doctorReviewQuestionCount");
  if (doctorReviewCount) doctorReviewCount.textContent = doctorReviewQuestions.length;
}

function renderLessons() {
  const list = $("#lessonList");
  list.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab ${index === activeLesson ? "active" : ""} ${completed.has(index) ? "done" : ""}" data-lesson="${index}">
      ${lesson.title}
      <small>${lesson.tag}</small>
    </button>
  `).join("");

  const lesson = lessons[activeLesson];
  $("#lessonBadge").textContent = `درس ${activeLesson + 1}`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonIntro").textContent = lesson.intro;
  $("#lessonContent").innerHTML = `
    ${lesson.code ? `<pre class="code-block">${lesson.code}</pre>` : ""}
    ${lesson.blocks.map(([title, items]) => `
      <div class="concept-box">
        <strong>${title}</strong>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `).join("")}
  `;

  $("#markDone").textContent = completed.has(activeLesson) ? "تمت بالفعل" : "تمت المراجعة";
  updateProgress();
}

function updateProgress() {
  const count = completed.size;
  $("#progressText").textContent = `${count} من ${lessons.length}`;
  $("#progressBar").style.width = `${(count / lessons.length) * 100}%`;
  localStorage.setItem("completedLessons", JSON.stringify([...completed]));
}

function renderLab() {
  $("#labGrid").innerHTML = labs.map((lab) => `
    <article class="lab-card">
      <h3>${lab.title}</h3>
      <p>${lab.desc}</p>
      <pre class="code-block">${lab.code}</pre>
      <div class="trace">${lab.trace.map((step) => `<span>${step}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderQuiz() {
  const q = quiz[currentQuestion];
  $("#questionNumber").textContent = `سؤال ${currentQuestion + 1} من ${quiz.length}`;
  $("#quizTopic").textContent = q.topic;
  $("#questionText").textContent = q.question;
  $("#questionCode").textContent = q.code;
  $("#questionCode").classList.toggle("hidden", !q.code);
  $("#answers").innerHTML = q.answers.map((answer, index) => {
    const selected = answersState[currentQuestion];
    const cls = selected === null ? "" : index === q.correct ? "correct" : selected === index ? "wrong" : "";
    return `<button class="answer-btn ${cls}" data-answer="${index}">${String.fromCharCode(97 + index)}) ${formatAnswerText(answer)}</button>`;
  }).join("");

  const feedback = $("#feedback");
  if (answersState[currentQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = answersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === quiz[index].correct).length;
  $("#scoreText").textContent = `${correct} / ${solved.length}`;
  updateFavoriteButtons();
}

function renderDoctorQuestions() {
  const q = doctorQuestions[currentDoctorQuestion];
  $("#doctorQuestionNumber").textContent = "\u0633\u0624\u0627\u0644 " + (currentDoctorQuestion + 1) + " \u0645\u0646 " + doctorQuestions.length;
  $("#doctorTopic").textContent = q.topic;
  $("#doctorQuestionText").textContent = q.question;
  $("#doctorQuestionCode").textContent = q.code;
  $("#doctorQuestionCode").classList.toggle("hidden", !q.code);
  $("#doctorAnswers").innerHTML = q.answers.map((answer, index) => {
    const selected = doctorAnswersState[currentDoctorQuestion];
    const cls = selected === null ? "" : index === q.correct ? "correct" : selected === index ? "wrong" : "";
    return `<button class="answer-btn ${cls}" data-doctor-answer="${index}">${String.fromCharCode(97 + index)}) ${formatAnswerText(answer)}</button>`;
  }).join("");

  const feedback = $("#doctorFeedback");
  if (doctorAnswersState[currentDoctorQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = doctorAnswersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === doctorQuestions[index].correct).length;
  $("#doctorScoreText").textContent = `${correct} / ${solved.length}`;
  updateFavoriteButtons();
}

function renderDoctorReviewQuestions() {
  const q = doctorReviewQuestions[currentDoctorReviewQuestion];
  $("#doctorReviewQuestionNumber").textContent = `سؤال ${currentDoctorReviewQuestion + 1} من ${doctorReviewQuestions.length}`;
  $("#doctorReviewTopic").textContent = q.topic;
  $("#doctorReviewQuestionText").textContent = q.question;
  $("#doctorReviewQuestionCode").textContent = q.code;
  $("#doctorReviewQuestionCode").classList.toggle("hidden", !q.code);
  $("#doctorReviewAnswers").innerHTML = q.answers.map((answer, index) => {
    const selected = doctorReviewAnswersState[currentDoctorReviewQuestion];
    const cls = selected === null ? "" : index === q.correct ? "correct" : selected === index ? "wrong" : "";
    return `<button class="answer-btn ${cls}" data-doctor-review-answer="${index}">${String.fromCharCode(97 + index)}) ${formatAnswerText(answer)}</button>`;
  }).join("");

  const feedback = $("#doctorReviewFeedback");
  if (doctorReviewAnswersState[currentDoctorReviewQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = doctorReviewAnswersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === doctorReviewQuestions[index].correct).length;
  $("#doctorReviewScoreText").textContent = `${correct} / ${solved.length}`;
  updateFavoriteButtons();
}

function renderSavedQuestionList(containerSelector, keys, listType, emptyText) {
  const container = $(containerSelector);
  const items = [...keys].map(getQuestionByKey).filter(Boolean);

  if (!items.length) {
    container.innerHTML = `<div class="empty-state">${emptyText}</div>`;
    return;
  }

  container.innerHTML = items.map(({ type, index, question }) => `
    <article class="saved-card">
      <div class="saved-meta">
        <span>${type === "doctor" ? "أسئلة الدكتور" : type === "doctorReview" ? "أسئلة مراجعة الدكتور" : "MCQ"}</span>
        <span>${escapeHtml(question.topic)}</span>
      </div>
      <h3>${escapeHtml(question.question)}</h3>
      ${question.code ? `<pre class="code-block">${escapeHtml(question.code)}</pre>` : ""}
      <p>الإجابة الصحيحة: <strong>${formatAnswerText(question.answers[question.correct])}</strong></p>
      <div class="saved-actions">
        <button class="secondary-btn" data-open-saved="${type}:${index}">فتح السؤال</button>
        <button class="secondary-btn danger-btn" data-remove-${listType}="${type}:${index}">إزالة</button>
      </div>
    </article>
  `).join("");
}

function renderSavedQuestions() {
  renderSavedQuestionList("#wrongQuestionsList", wrongQuestionKeys, "wrong", "لسه مفيش أسئلة غلطت فيها.");
  renderSavedQuestionList("#favoriteQuestionsList", favoriteQuestionKeys, "favorite", "لسه مفيش أسئلة محفوظة في المفضلة.");
}

function renderSheet() {
  $("#sheetGrid").innerHTML = sheetItems.map(([title, items]) => `
    <article class="sheet-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function activateView(viewId) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function openSavedQuestion(key) {
  const saved = getQuestionByKey(key);
  if (!saved) return;

  if (saved.type === "doctor") {
    currentDoctorQuestion = saved.index;
    renderDoctorQuestions();
    activateView("doctor");
    return;
  }

  if (saved.type === "doctorReview") {
    currentDoctorReviewQuestion = saved.index;
    renderDoctorReviewQuestions();
    activateView("doctorReview");
    return;
  }

  currentQuestion = saved.index;
  renderQuiz();
  activateView("quiz");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) {
    activateView(nav.dataset.view);
    renderSavedQuestions();
  }

  const lessonButton = event.target.closest(".lesson-tab");
  if (lessonButton) {
    activeLesson = Number(lessonButton.dataset.lesson);
    renderLessons();
  }

  if (event.target.id === "markDone") {
    completed.add(activeLesson);
    renderLessons();
  }

  const doctorAnswer = event.target.closest("[data-doctor-answer]");
  if (doctorAnswer) {
    const selected = Number(doctorAnswer.dataset.doctorAnswer);
    doctorAnswersState[currentDoctorQuestion] = selected;
    if (selected !== doctorQuestions[currentDoctorQuestion].correct) {
      wrongQuestionKeys.add(questionKey("doctor", currentDoctorQuestion));
      persistSavedQuestions();
      renderSavedQuestions();
      activateView("wrong");
    }
    renderDoctorQuestions();
    return;
  }

  const doctorReviewAnswer = event.target.closest("[data-doctor-review-answer]");
  if (doctorReviewAnswer) {
    const selected = Number(doctorReviewAnswer.dataset.doctorReviewAnswer);
    doctorReviewAnswersState[currentDoctorReviewQuestion] = selected;
    if (selected !== doctorReviewQuestions[currentDoctorReviewQuestion].correct) {
      wrongQuestionKeys.add(questionKey("doctorReview", currentDoctorReviewQuestion));
      persistSavedQuestions();
      renderSavedQuestions();
      activateView("wrong");
    }
    renderDoctorReviewQuestions();
    return;
  }

  const answer = event.target.closest(".answer-btn");
  if (answer) {
    const selected = Number(answer.dataset.answer);
    answersState[currentQuestion] = selected;
    if (selected !== quiz[currentQuestion].correct) {
      wrongQuestionKeys.add(questionKey("quiz", currentQuestion));
      persistSavedQuestions();
      renderSavedQuestions();
      activateView("wrong");
    }
    renderQuiz();
  }

  if (event.target.id === "toggleFavorite") {
    const key = questionKey("quiz", currentQuestion);
    favoriteQuestionKeys.has(key) ? favoriteQuestionKeys.delete(key) : favoriteQuestionKeys.add(key);
    persistSavedQuestions();
    renderQuiz();
    renderSavedQuestions();
    activateView("favorites");
  }

  if (event.target.id === "toggleDoctorFavorite") {
    const key = questionKey("doctor", currentDoctorQuestion);
    favoriteQuestionKeys.has(key) ? favoriteQuestionKeys.delete(key) : favoriteQuestionKeys.add(key);
    persistSavedQuestions();
    renderDoctorQuestions();
    renderSavedQuestions();
    activateView("favorites");
  }

  if (event.target.id === "toggleDoctorReviewFavorite") {
    const key = questionKey("doctorReview", currentDoctorReviewQuestion);
    favoriteQuestionKeys.has(key) ? favoriteQuestionKeys.delete(key) : favoriteQuestionKeys.add(key);
    persistSavedQuestions();
    renderDoctorReviewQuestions();
    renderSavedQuestions();
    activateView("favorites");
  }

  const openSaved = event.target.closest("[data-open-saved]");
  if (openSaved) {
    openSavedQuestion(openSaved.dataset.openSaved);
  }

  const removeWrong = event.target.closest("[data-remove-wrong]");
  if (removeWrong) {
    wrongQuestionKeys.delete(removeWrong.dataset.removeWrong);
    persistSavedQuestions();
    renderSavedQuestions();
  }

  const removeFavorite = event.target.closest("[data-remove-favorite]");
  if (removeFavorite) {
    favoriteQuestionKeys.delete(removeFavorite.dataset.removeFavorite);
    persistSavedQuestions();
    updateFavoriteButtons();
    renderSavedQuestions();
  }

  if (event.target.id === "nextQuestion") {
    currentQuestion = Math.min(quiz.length - 1, currentQuestion + 1);
    renderQuiz();
  }

  if (event.target.id === "prevQuestion") {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  }

  if (event.target.id === "nextDoctorQuestion") {
    currentDoctorQuestion = Math.min(doctorQuestions.length - 1, currentDoctorQuestion + 1);
    renderDoctorQuestions();
  }

  if (event.target.id === "prevDoctorQuestion") {
    currentDoctorQuestion = Math.max(0, currentDoctorQuestion - 1);
    renderDoctorQuestions();
  }

  if (event.target.id === "nextDoctorReviewQuestion") {
    currentDoctorReviewQuestion = Math.min(doctorReviewQuestions.length - 1, currentDoctorReviewQuestion + 1);
    renderDoctorReviewQuestions();
  }

  if (event.target.id === "prevDoctorReviewQuestion") {
    currentDoctorReviewQuestion = Math.max(0, currentDoctorReviewQuestion - 1);
    renderDoctorReviewQuestions();
  }
});

renderLessons();
renderLab();
renderQuiz();
renderDoctorQuestions();
renderDoctorReviewQuestions();
renderSavedQuestions();
renderSheet();
renderStats();
