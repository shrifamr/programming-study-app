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
      ["معاملات المقارنة", ["> أكبر من، < أصغر من.", ">= أكبر أو يساوي، <= أصغر أو يساوي.", "== مقارنة تساوي، != لا يساوي.", "= للتخزين وليس للمقارنة."]],
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

const $ = (selector) => document.querySelector(selector);

function renderStats() {
  $("#lessonCount").textContent = lessons.length;
  $("#questionCount").textContent = quiz.length;
  $("#labCount").textContent = labs.length;
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
    return `<button class="answer-btn ${cls}" data-answer="${index}">${String.fromCharCode(97 + index)}) ${answer}</button>`;
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
}

function renderSheet() {
  $("#sheetGrid").innerHTML = sheetItems.map(([title, items]) => `
    <article class="sheet-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    nav.classList.add("active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    $(`#${nav.dataset.view}`).classList.add("active");
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

  const answer = event.target.closest(".answer-btn");
  if (answer) {
    answersState[currentQuestion] = Number(answer.dataset.answer);
    renderQuiz();
  }

  if (event.target.id === "nextQuestion") {
    currentQuestion = Math.min(quiz.length - 1, currentQuestion + 1);
    renderQuiz();
  }

  if (event.target.id === "prevQuestion") {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  }
});

renderLessons();
renderLab();
renderQuiz();
renderSheet();
renderStats();
