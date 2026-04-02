
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const moduleData = [
  {
    moduleNumber: 1,
    title: "Importance of Managing Building Materials Well",
    description: "Understand why effective material management is the foundation of profitability and operational efficiency in residential construction.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Explain why building materials represent the largest controllable cost in residential construction</li>
      <li>Identify the key financial impacts of poor material management on builder profitability</li>
      <li>Describe the relationship between material waste, scheduling delays, and margin erosion</li>
      <li>Recognize the purchasing department's strategic role beyond simple procurement</li>
      <li>Articulate the business case for investing in material management improvement</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Building materials typically represent 45 to 55 percent of the total cost of constructing a home. Despite this enormous share of the budget, many production homebuilders treat purchasing as a transactional function rather than a strategic discipline. The result is billions of dollars in unnecessary cost leakage across the industry each year. Purchasing professionals who understand the full scope of material management—from specification through installation—are uniquely positioned to drive meaningful profit improvement.</p>

    <h3>The True Cost of Materials</h3>
    <p>When builders calculate material costs, they often focus narrowly on the unit price negotiated with a supplier. However, the true cost of materials extends far beyond the purchase price. It includes freight and delivery charges, handling and storage on the job site, damage and theft losses, waste from over-ordering or improper cuts, and the labor cost of rework when incorrect materials are installed. Industry studies consistently show that the total cost of materials can be 15 to 25 percent higher than the invoice price alone when these hidden costs are accounted for.</p>

    <h3>Material Management as a Profit Lever</h3>
    <p>In an industry where net margins often hover between 5 and 10 percent, even a modest improvement in material management can have an outsized impact on the bottom line. A builder constructing 500 homes per year at an average material cost of $120,000 per home is spending $60 million annually on materials. A 3 percent reduction in total material cost—achievable through better purchasing practices—yields $1.8 million in additional profit. This is money that flows directly to the bottom line without requiring a single additional home sale.</p>

    <h3>The Purchasing Professional's Strategic Role</h3>
    <p>The modern purchasing professional must think beyond price negotiation. Effective material management requires coordination with design, construction, and finance teams. It demands an understanding of supply chain dynamics, logistics optimization, and data-driven decision making. Purchasing professionals who can connect material decisions to business outcomes—cycle time, warranty costs, customer satisfaction, and trade contractor productivity—become indispensable strategic partners in the organization. This course is designed to equip you with that comprehensive perspective and the practical tools to make it real.</p>

    <h3>Why Now?</h3>
    <p>The homebuilding industry faces persistent challenges including labor shortages, volatile material prices, supply chain disruptions, and increasing regulatory complexity. These pressures make disciplined material management more important than ever. Builders who invest in their purchasing capabilities gain a durable competitive advantage—one that compounds over time as better data, stronger supplier relationships, and more efficient processes create a virtuous cycle of continuous improvement.</p>
  </section>
</div>
    `,
    order: 1
  },
  {
    moduleNumber: 2,
    title: "What Homebuilders Have Done Well",
    description: "Recognize the purchasing achievements of the homebuilding industry and understand the practices that have driven cost efficiency over the decades.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Identify the major purchasing innovations that production homebuilders have pioneered</li>
      <li>Explain how national and regional purchasing programs generate volume-based savings</li>
      <li>Describe the evolution of builder-supplier relationships from adversarial to collaborative</li>
      <li>Understand how standardized option packages reduce complexity and cost</li>
      <li>Recognize the foundation of good practices upon which further improvement can be built</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Before examining areas for improvement, it is essential to acknowledge what the homebuilding industry has accomplished in purchasing and material management. Over the past several decades, production homebuilders have developed sophisticated purchasing practices that have meaningfully reduced costs and improved quality. Understanding these achievements provides the foundation for identifying the next wave of improvement opportunities.</p>

    <h3>Volume Purchasing Programs</h3>
    <p>The largest production homebuilders have built national and regional purchasing programs that aggregate demand across dozens or even hundreds of communities. By consolidating volume, these builders negotiate pricing that is significantly below retail and often below distributor cost. National purchasing agreements with manufacturers of windows, appliances, HVAC systems, plumbing fixtures, and other major categories have saved the industry billions of dollars. These programs also create consistency in product specification, which simplifies training, reduces installation errors, and improves warranty management.</p>

    <h3>Standardization and Option Management</h3>
    <p>Leading builders have invested heavily in standardizing their product offerings. Rather than allowing unlimited customization, they have developed curated option packages that give homebuyers meaningful choices while keeping material complexity manageable. This standardization reduces the number of unique SKUs that must be purchased, stocked, and tracked. It also allows builders to negotiate better pricing because suppliers can plan production runs around predictable demand patterns. The discipline of managing options as structured packages rather than ad hoc requests is one of the industry's most important purchasing innovations.</p>

    <h3>Supplier Relationship Development</h3>
    <p>The best builders have moved beyond purely transactional supplier relationships toward genuine partnerships. They share forecasts, collaborate on product development, and work together to solve quality and delivery challenges. These collaborative relationships create value that goes far beyond price—they improve reliability, reduce lead times, and accelerate innovation. When a builder and supplier trust each other enough to share data openly, both parties can make better decisions and eliminate waste from the system.</p>

    <h3>Technology Adoption</h3>
    <p>Many builders have embraced technology to improve purchasing efficiency. Enterprise resource planning systems, electronic plan distribution, and digital takeoff tools have reduced the manual effort required to estimate, order, and track materials. While there is still significant room for improvement in this area, the builders who have invested in purchasing technology have seen meaningful returns in accuracy, speed, and cost control. These technological foundations create the platform for the more advanced improvements discussed in later modules.</p>
  </section>
</div>
    `,
    order: 2
  },
  {
    moduleNumber: 3,
    title: "Logistics—Less Tire Tracks Equals Less Cost",
    description: "Learn how optimizing material delivery logistics reduces costs, minimizes job site disruption, and improves construction cycle times.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Explain the concept of "less tire tracks equals less cost" in residential construction logistics</li>
      <li>Calculate the hidden costs of multiple small deliveries versus consolidated shipments</li>
      <li>Identify strategies for optimizing delivery schedules to align with construction phases</li>
      <li>Describe the impact of delivery logistics on trade contractor productivity</li>
      <li>Develop a framework for evaluating logistics improvements in your organization</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Every truck that rolls onto a construction site carries not just materials but also cost. Each delivery consumes time for unloading, creates wear and tear on the site, generates potential safety hazards, and disrupts the workflow of trades already working on the lot. The principle of "less tire tracks equals less cost" captures a fundamental truth about construction logistics: reducing the number of deliveries while ensuring materials arrive when and where they are needed is one of the most powerful cost reduction strategies available to homebuilders.</p>

    <h3>The Hidden Cost of Deliveries</h3>
    <p>Most builders track the invoice cost of materials but rarely quantify the cost of delivering those materials. A typical delivery to a residential job site involves 15 to 30 minutes of truck time, a driver, fuel, and often a forklift or crane for unloading. The site superintendent or an assistant must be present to verify the delivery and direct placement. If materials are delivered at the wrong time, they must be stored, protected from weather, and potentially moved multiple times before installation. Industry analysis suggests that the logistics cost of a delivery—independent of the material value—ranges from $75 to $200 per trip. For a builder delivering 30 to 40 separate loads per home, the aggregate logistics cost is substantial.</p>

    <h3>Consolidation Strategies</h3>
    <p>Smart builders reduce delivery frequency through several approaches. First, they combine materials from a single supplier into fewer, larger shipments timed to the construction schedule. Second, they use staging yards or distribution centers where materials from multiple suppliers are consolidated onto a single truck for delivery to the job site. Third, they coordinate delivery windows so that materials arrive just before they are needed—not weeks in advance where they sit exposed to weather and theft, and not at the last minute where they cause delays.</p>

    <h3>Impact on Trade Productivity</h3>
    <p>Delivery logistics directly affect trade contractor productivity. When materials arrive late or in the wrong sequence, trade crews stand idle or must work around missing items, both of which increase cost and extend cycle time. Conversely, when materials are staged correctly and delivered on schedule, trades can maintain continuous workflow. The most efficient builders coordinate material deliveries with their construction schedule so tightly that trade contractors can begin work immediately upon arriving at the job site without waiting for materials or moving stock to access their work area.</p>

    <h3>Measuring Logistics Performance</h3>
    <p>To improve logistics, you must first measure it. Key metrics include deliveries per home, delivery accuracy rate, percentage of deliveries arriving within the scheduled window, damage rate per delivery, and the number of return trips required for incorrect or incomplete orders. Builders who track these metrics consistently find opportunities to reduce deliveries per home by 20 to 30 percent, which translates directly into lower costs, faster cycle times, and better trade contractor relationships.</p>
  </section>
</div>
    `,
    order: 3
  },
  {
    moduleNumber: 4,
    title: "Using Builder Supplied Materials",
    description: "Explore the advantages and implementation challenges of builder-supplied material programs versus traditional trade contractor procurement.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Define builder-supplied materials and distinguish them from trade-supplied materials</li>
      <li>Analyze the cost advantages of builder-supplied material programs</li>
      <li>Identify the operational requirements for successful builder-supplied programs</li>
      <li>Evaluate the impact of builder-supplied materials on trade contractor relationships</li>
      <li>Develop criteria for determining which materials to supply versus leaving with trades</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>One of the most significant decisions a homebuilder's purchasing department makes is which materials to procure directly and which to leave embedded in trade contractor bids. Builder-supplied material programs—where the builder purchases materials and provides them to the trade for installation—can generate substantial savings, but they also introduce operational complexity that must be managed carefully. Getting this balance right is a hallmark of sophisticated purchasing organizations.</p>

    <h3>The Economic Case for Builder-Supplied Materials</h3>
    <p>When a trade contractor supplies materials as part of their bid, the builder pays not only for the material but also for the trade's markup, which typically ranges from 10 to 30 percent depending on the category. By purchasing materials directly, the builder captures this margin. Additionally, builders who purchase in volume across many communities can negotiate pricing from manufacturers or distributors that is significantly lower than what an individual trade contractor can achieve. For high-value categories like lumber, windows, roofing, and insulation, the savings from a builder-supplied program can be hundreds of dollars per home.</p>

    <h3>Operational Requirements</h3>
    <p>A successful builder-supplied material program requires robust infrastructure. The builder must have accurate takeoff capabilities to order the correct quantities for each home plan and elevation. Purchasing systems must generate orders in time to meet the construction schedule. Delivery logistics must be coordinated so that materials arrive at the job site when the trade is ready to install them. And inventory management processes must track what has been ordered, delivered, and installed to prevent shortages or overages. Builders who attempt to run builder-supplied programs without this infrastructure often create more problems than they solve.</p>

    <h3>Impact on Trade Relationships</h3>
    <p>Shifting to builder-supplied materials changes the dynamic with trade contractors. Some trades welcome the change because it reduces their working capital requirements and simplifies their bidding process. Others resist because they lose material markup—a meaningful portion of their profit. The key to maintaining strong trade relationships through this transition is transparency. Builders should adjust labor-only pricing to reflect the new scope and ensure that material delivery is reliable enough that trades are not penalized for issues outside their control.</p>

    <h3>Deciding What to Supply</h3>
    <p>Not every material category is a good candidate for builder supply. The best candidates share several characteristics: high material value relative to labor, standardized specifications across plans, stable demand patterns that enable volume purchasing, and reliable supply chains that minimize the risk of delays. Categories like lumber packages, windows, roofing, insulation, and garage doors are commonly builder-supplied. Categories with high variability, custom fabrication requirements, or specialized handling needs may be better left with the trade contractor.</p>
  </section>
</div>
    `,
    order: 4
  },
  {
    moduleNumber: 5,
    title: "Material Kitting for Greater Efficiencies",
    description: "Understand the concept of material kitting and how pre-assembled material packages improve accuracy, reduce waste, and accelerate installation.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Define material kitting and explain its application in residential construction</li>
      <li>Identify the benefits of kitting including waste reduction, labor savings, and quality improvement</li>
      <li>Describe the logistics and supplier coordination required to implement kitting programs</li>
      <li>Evaluate which material categories are best suited for kitting</li>
      <li>Calculate the return on investment of a kitting program for a production builder</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Material kitting is the practice of pre-assembling all the materials needed for a specific task or phase of construction into a single package that is delivered to the job site ready for installation. Rather than ordering individual components separately and relying on the trade contractor to gather what they need from multiple deliveries, a kit contains everything required—in the exact quantities specified by the plans—to complete a defined scope of work. This approach transforms material management from a reactive, error-prone process into a proactive, precision-driven system.</p>

    <h3>How Kitting Works</h3>
    <p>A typical kitting program begins with detailed material takeoffs for each house plan and elevation. These takeoffs are used to create bill-of-materials lists that specify every item, quantity, and size needed for a given phase of construction. The kit is assembled at a supplier's warehouse or a builder's distribution center, where items are pulled, counted, and packaged together. The completed kit is then delivered to the job site on a scheduled date, often on a single truck, with all items clearly labeled and organized for the installing trade.</p>

    <h3>Benefits of Kitting</h3>
    <p>The benefits of material kitting are multifaceted. First, accuracy improves dramatically because the kit is assembled from a verified bill of materials rather than a field estimate. Second, waste decreases because materials are ordered in precise quantities rather than rounded up with a safety margin. Third, theft and damage are reduced because materials spend less time sitting on the job site. Fourth, trade productivity increases because installers can begin work immediately without sorting through piles of material or waiting for missing items. Fifth, delivery frequency drops because a single kit replaces multiple individual deliveries.</p>

    <h3>Kitting Candidates</h3>
    <p>The best candidates for kitting are material categories with multiple components that must work together, predictable specifications across house plans, and manageable package sizes. Plumbing rough-in kits, electrical trim packages, HVAC duct and fitting kits, and finish hardware packages are all excellent candidates. Lumber framing packages are among the most common and highest-value kitting applications in residential construction, where a single delivery replaces what might otherwise require three to five separate loads.</p>

    <h3>Implementation Considerations</h3>
    <p>Implementing a kitting program requires upfront investment in accurate takeoff data, supplier partnerships, and logistics coordination. Builders must be willing to work closely with suppliers to develop and refine kit specifications, establish quality control processes at the assembly point, and create feedback loops so that field issues are quickly incorporated into kit design. The return on this investment is typically realized within the first year of operation, with ongoing savings compounding as the program matures and accuracy improves.</p>
  </section>
</div>
    `,
    order: 5
  },
  {
    moduleNumber: 6,
    title: "The Extraordinary Value of Data (SKU's & Date Needed data)",
    description: "Discover how SKU-level data and date-needed scheduling transform purchasing from a guessing game into a precision discipline.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Explain why SKU-level material data is essential for modern purchasing management</li>
      <li>Describe how date-needed data improves supply chain coordination and reduces waste</li>
      <li>Identify the data infrastructure required to support precision purchasing</li>
      <li>Analyze the financial impact of data-driven versus intuition-driven purchasing decisions</li>
      <li>Develop a roadmap for improving data quality in your purchasing organization</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Data is the single most underutilized asset in homebuilder purchasing departments. While most builders track spending at a high level—total lumber cost per home, for example—very few have the ability to analyze purchasing at the SKU level or to connect material orders to the specific date each item is needed on the job site. This lack of granular data forces purchasing professionals to rely on rules of thumb, historical averages, and educated guesses. The builders who have invested in SKU-level and date-needed data have unlocked extraordinary value that their competitors cannot match.</p>

    <h3>The Power of SKU-Level Data</h3>
    <p>A stock keeping unit, or SKU, is a unique identifier for a specific product—not just "2x4 lumber" but "2x4x8 #2 SPF kiln-dried stud." When purchasing data is captured at the SKU level, it becomes possible to analyze consumption patterns with precision. Which SKUs are used in every plan? Which are unique to specific elevations or options? Which SKUs have volatile pricing, and which are stable? Where are substitutions happening in the field, and what do they cost? Without SKU-level data, these questions are unanswerable. With it, purchasing professionals can negotiate smarter, forecast more accurately, and identify waste that is invisible at the category level.</p>

    <h3>Date-Needed Data</h3>
    <p>Equally powerful is the concept of date-needed data—knowing not just what materials are required for a home but exactly when they are needed based on the construction schedule. When a builder can tell a supplier that they need 500 units of a specific window SKU delivered across 25 communities over the next 90 days, with specific delivery dates for each community, the supplier can plan production, allocate inventory, and schedule logistics far more efficiently. This reduces the supplier's cost, which creates room for better pricing. It also virtually eliminates the emergency orders, expediting fees, and production disruptions that plague builders who order reactively.</p>

    <h3>Building the Data Infrastructure</h3>
    <p>Creating SKU-level and date-needed data requires investment in several areas. First, detailed material takeoffs must be developed for every plan and elevation, specifying individual SKUs rather than generic descriptions. Second, the construction schedule must be integrated with the purchasing system so that material need dates are automatically generated when a home starts or reaches a given phase. Third, suppliers must be equipped to receive and process orders that include SKU-level detail and delivery date requirements. This infrastructure takes time to build, but the competitive advantage it creates is durable and difficult for competitors to replicate.</p>

    <h3>Measuring the Impact</h3>
    <p>Builders who have implemented data-driven purchasing consistently report 5 to 10 percent reductions in total material cost, 20 to 30 percent reductions in material waste, and significant improvements in on-time delivery rates. Perhaps most importantly, the data creates visibility into cost trends and consumption patterns that enable proactive decision making rather than reactive firefighting. In an industry where margins are tight and surprises are costly, this visibility is extraordinarily valuable.</p>
  </section>
</div>
    `,
    order: 6
  },
  {
    moduleNumber: 7,
    title: "Long Term Relationships with Trade Contractors",
    description: "Learn how investing in durable trade contractor partnerships creates mutual value, stabilizes costs, and improves construction quality.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Articulate the business case for long-term trade contractor relationships versus transactional bidding</li>
      <li>Identify the key elements that make trade partnerships successful and sustainable</li>
      <li>Describe how trade contractor stability impacts construction quality and cycle time</li>
      <li>Develop strategies for recruiting, retaining, and developing trade contractor partners</li>
      <li>Create a framework for evaluating trade contractor performance beyond price alone</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>The relationship between a homebuilder and its trade contractors is one of the most critical and often most mismanaged dynamics in the industry. Too many builders treat trades as interchangeable commodities, constantly rebidding work to squeeze out incremental savings. This approach destroys trust, discourages investment, and ultimately increases costs. Builders who instead invest in long-term trade partnerships enjoy more stable pricing, higher quality work, better schedule adherence, and a workforce that is genuinely committed to the builder's success.</p>

    <h3>The Cost of Turnover</h3>
    <p>Trade contractor turnover carries enormous hidden costs. Every time a builder switches trades, there is a learning curve during which the new trade must understand the builder's plans, specifications, quality standards, and scheduling expectations. During this transition period, defect rates typically increase, cycle times lengthen, and superintendent time spent managing the new relationship goes up. When these costs are quantified, the savings from a slightly lower bid often evaporate entirely. Builders who track total cost of trade engagement—not just bid price—consistently find that their longest-tenured trades deliver the best overall value.</p>

    <h3>Building Genuine Partnerships</h3>
    <p>Authentic trade partnerships are built on mutual respect, clear communication, and shared commitment to improvement. This means paying trades promptly and fairly, providing accurate scopes of work that do not change after the bid is accepted, scheduling work so that trades can maintain efficient crew utilization, and addressing problems collaboratively rather than punitively. It also means involving key trades in pre-construction planning so they can identify potential issues before they become expensive field problems.</p>

    <h3>Volume Commitment and Pricing Stability</h3>
    <p>One of the most powerful tools a builder has for creating trade loyalty is volume commitment. When a builder commits to giving a trade all or most of its work in a market—rather than splitting it among competitors—the trade can invest in dedicated crews, specialized equipment, and training. This investment improves quality and efficiency, and the trade can pass some of those savings back to the builder through more favorable pricing. The result is a virtuous cycle where commitment breeds investment, investment breeds performance, and performance justifies continued commitment.</p>

    <h3>Performance Management</h3>
    <p>Long-term relationships do not mean accepting poor performance. Effective trade partnerships include clear performance expectations, regular measurement, and honest feedback. Quality scorecards, schedule adherence metrics, and safety records should be tracked and shared with trades regularly. When performance falls short, the response should be collaborative problem-solving rather than threats to rebid. Trades who understand what is expected and receive consistent feedback can improve. Trades who are managed by fear can only cut corners.</p>
  </section>
</div>
    `,
    order: 7
  },
  {
    moduleNumber: 8,
    title: "Effecting Material Management Improvement",
    description: "Master the change management principles and practical implementation strategies needed to drive lasting improvement in material management.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Identify the common barriers to material management improvement in homebuilding organizations</li>
      <li>Apply change management principles to purchasing transformation initiatives</li>
      <li>Develop a structured approach to identifying and prioritizing improvement opportunities</li>
      <li>Create implementation plans that account for organizational readiness and capacity</li>
      <li>Establish metrics and feedback loops to sustain improvement over time</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Knowing what to improve and actually improving it are two very different challenges. Many purchasing departments can identify significant opportunities for better material management but struggle to translate those insights into lasting organizational change. The gap between knowing and doing is not a knowledge problem—it is a change management problem. This module provides the frameworks and practical strategies needed to move from identifying improvement opportunities to implementing them successfully.</p>

    <h3>Understanding Resistance</h3>
    <p>Material management improvement almost always requires people to change how they work, and people naturally resist change. Superintendents who have been ordering materials their own way for years will resist centralized purchasing controls. Trade contractors who are comfortable with current arrangements will push back on kitting or builder-supplied programs. Even purchasing team members may resist new systems or processes that require learning new skills. Understanding the sources of resistance—whether they are rooted in habit, fear of losing control, lack of trust, or legitimate operational concerns—is the first step toward overcoming it.</p>

    <h3>The Case for Incremental Change</h3>
    <p>The most successful material management transformations are implemented incrementally rather than all at once. Start with a pilot community or a single material category. Prove the concept, measure the results, refine the process, and then expand. This approach reduces risk, builds credibility with skeptics, and allows the organization to develop capability progressively. Attempting a wholesale transformation of purchasing practices across every community simultaneously almost always fails because it overwhelms the organization's capacity to absorb change.</p>

    <h3>Building Coalition Support</h3>
    <p>Material management improvement cannot be driven by the purchasing department alone. It requires active support from construction operations, finance, and executive leadership. The purchasing leader must build a coalition by translating material management improvements into terms that each stakeholder values. For operations, frame improvements in terms of cycle time and trade productivity. For finance, frame them in terms of margin improvement and cost predictability. For executives, frame them in terms of competitive advantage and scalability.</p>

    <h3>Sustaining Improvement</h3>
    <p>The most dangerous phase of any improvement initiative is the period after initial implementation, when attention shifts to other priorities and old habits begin to reassert themselves. Sustaining improvement requires ongoing measurement, regular reporting, and accountability at every level. It also requires celebrating wins—even small ones—to reinforce the value of the new approach. Builders who create a culture of continuous improvement in their purchasing organizations find that each successive initiative is easier to implement because the organizational muscle for change has been developed.</p>

    <h3>Practical Implementation Tools</h3>
    <p>Effective improvement programs use a combination of process mapping, root cause analysis, cost-benefit analysis, and pilot testing. Start by mapping the current material management process end-to-end to identify bottlenecks and waste. Use root cause analysis to understand why problems exist rather than just treating symptoms. Build a cost-benefit case for each proposed change that includes both hard savings and soft benefits. And always pilot test before full deployment to identify unforeseen issues in a low-risk environment.</p>
  </section>
</div>
    `,
    order: 8
  },
  {
    moduleNumber: 9,
    title: "Prioritizing Strategies for Short-Term and Long-Term Benefits",
    description: "Learn to evaluate and sequence improvement initiatives to balance quick wins with transformational long-term investments in purchasing excellence.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Distinguish between short-term tactical improvements and long-term strategic investments</li>
      <li>Apply a prioritization framework to rank material management improvement opportunities</li>
      <li>Balance quick wins that build momentum with foundational changes that enable future gains</li>
      <li>Create a phased improvement roadmap aligned with organizational capacity and business cycles</li>
      <li>Communicate the strategic rationale for improvement sequencing to leadership and stakeholders</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>Purchasing departments that try to fix everything at once fix nothing. The most effective material management improvement programs are carefully sequenced to deliver early results that build organizational confidence while simultaneously laying the groundwork for more transformational changes. Learning to prioritize—to say "this first, then that"—is one of the most important skills a purchasing leader can develop.</p>

    <h3>The Prioritization Matrix</h3>
    <p>A practical prioritization framework plots improvement opportunities on two axes: impact (the expected financial or operational benefit) and effort (the resources, time, and organizational change required to implement). Opportunities in the high-impact, low-effort quadrant are quick wins that should be pursued immediately. Those in the high-impact, high-effort quadrant are strategic investments that require careful planning and phased implementation. Low-impact, low-effort opportunities can be addressed opportunistically, and low-impact, high-effort initiatives should generally be deferred or eliminated.</p>

    <h3>Short-Term Wins (0-6 Months)</h3>
    <p>Short-term improvements typically involve optimizing existing processes rather than building new capabilities. Examples include renegotiating pricing on the highest-spend material categories, consolidating supplier relationships to capture volume discounts, implementing basic delivery scheduling to reduce emergency orders, standardizing material specifications across similar house plans, and cleaning up purchase order processes to reduce errors. These initiatives can often be implemented with existing staff and systems, and they demonstrate the value of disciplined purchasing management to the broader organization.</p>

    <h3>Medium-Term Investments (6-18 Months)</h3>
    <p>Medium-term initiatives build new capabilities that enable more sophisticated material management. Examples include developing SKU-level material takeoffs for all house plans, implementing a kitting program for one or two material categories, creating a supplier performance measurement system, building date-needed scheduling into the purchasing process, and establishing formal trade contractor partnership agreements. These initiatives require more significant investment in time, training, and often technology, but they create the foundation for long-term competitive advantage.</p>

    <h3>Long-Term Transformation (18-36 Months)</h3>
    <p>Long-term transformational initiatives fundamentally change how the organization manages materials. Examples include full integration of purchasing and construction scheduling systems, comprehensive kitting programs across all major material categories, predictive analytics for material pricing and demand forecasting, automated replenishment systems tied to construction milestones, and strategic supplier co-investment programs. These initiatives deliver the largest returns but require the organizational maturity and data infrastructure developed through earlier phases.</p>

    <h3>Communicating the Roadmap</h3>
    <p>A well-designed improvement roadmap serves as both a planning tool and a communication device. It shows leadership that the purchasing team has a thoughtful, sequenced plan rather than a random list of projects. It helps stakeholders understand why certain initiatives must come before others. And it creates accountability by establishing clear timelines and milestones. The roadmap should be reviewed and updated quarterly to reflect changing business conditions, lessons learned, and new opportunities.</p>
  </section>
</div>
    `,
    order: 9
  },
  {
    moduleNumber: 10,
    title: "Fast Improvements Depend on the Right Company Culture",
    description: "Understand how organizational culture accelerates or inhibits purchasing improvement, and learn to cultivate the cultural conditions for rapid progress.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Describe the cultural attributes that enable rapid material management improvement</li>
      <li>Identify cultural barriers that slow or prevent purchasing transformation</li>
      <li>Explain the role of leadership in establishing a culture of continuous improvement</li>
      <li>Develop strategies for shifting organizational culture toward data-driven decision making</li>
      <li>Create accountability structures that reinforce desired cultural behaviors</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>The speed at which a homebuilder can improve its material management practices is determined less by the quality of the strategy and more by the culture of the organization. Companies with cultures that value data, reward collaboration, tolerate calculated risk, and celebrate improvement will implement changes rapidly and sustain them. Companies with cultures characterized by blame, silos, resistance to change, and short-term thinking will struggle to implement even the most compelling improvements. Culture is not a soft topic—it is the hardest and most important variable in the improvement equation.</p>

    <h3>Cultures That Enable Improvement</h3>
    <p>Organizations that improve quickly share several cultural characteristics. First, they are data-driven—decisions are based on evidence rather than opinion, seniority, or tradition. Second, they are collaborative—departments share information freely and work together toward common goals rather than optimizing their own metrics at the expense of others. Third, they are learning-oriented—mistakes are treated as opportunities to improve rather than occasions for punishment. Fourth, they are results-focused—people are measured and rewarded based on outcomes rather than activities or effort.</p>

    <h3>Common Cultural Barriers</h3>
    <p>Several cultural patterns consistently impede purchasing improvement. The "hero culture" rewards superintendents and project managers who solve urgent problems through personal heroics rather than systematic prevention. The "silo mentality" prevents purchasing, construction, and design teams from sharing information or coordinating decisions. The "blame culture" discourages people from reporting problems or suggesting changes because they fear being held responsible for failures. The "short-term focus" prioritizes immediate cost savings over investments in systems and processes that would deliver larger returns over time.</p>

    <h3>Leadership's Role</h3>
    <p>Culture change must be led from the top. When executives visibly support material management improvement—by attending review meetings, asking informed questions, celebrating successes, and holding leaders accountable for results—the organization follows. When executives delegate purchasing improvement to a middle manager without visible sponsorship, the initiative will be deprioritized whenever it conflicts with other demands. The most successful purchasing transformations have an executive champion who understands the strategic value of material management and is willing to invest organizational capital in driving change.</p>

    <h3>Building a Continuous Improvement Mindset</h3>
    <p>The goal is not to implement a single set of improvements and declare victory. The goal is to build an organizational capability for continuous improvement—the ability to identify opportunities, test solutions, measure results, and scale successes on an ongoing basis. This requires investing in people through training and development, creating forums for sharing best practices across communities and divisions, and building the data and technology infrastructure that makes improvement measurable. Organizations that develop this capability gain an accelerating advantage over competitors who treat improvement as a one-time project.</p>
  </section>
</div>
    `,
    order: 10
  },
  {
    moduleNumber: 11,
    title: "Why The Urgency to Improve",
    description: "Examine the market forces, competitive pressures, and industry trends that make material management improvement an urgent strategic priority.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Identify the external market forces driving urgency for purchasing improvement</li>
      <li>Analyze the impact of labor shortages on material management strategies</li>
      <li>Explain how volatile material prices increase the importance of data-driven purchasing</li>
      <li>Describe competitive dynamics that reward purchasing excellence and punish complacency</li>
      <li>Build a compelling case for investment in purchasing improvement for your organization</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>The case for improving material management in residential construction is not merely about optimizing an existing system—it is about survival and competitive positioning in an industry undergoing profound change. Multiple forces are converging to make purchasing excellence more important than it has ever been, and builders who fail to respond will find themselves at an increasingly severe disadvantage. This module examines the forces creating urgency and equips purchasing professionals to make a compelling case for investment and action.</p>

    <h3>The Labor Crisis</h3>
    <p>The skilled labor shortage in residential construction is not a cyclical problem—it is a structural one. The industry has lost a generation of workers, and incoming labor supply is insufficient to replace those retiring. This shortage has two critical implications for material management. First, labor costs are rising and will continue to rise, making it essential to maximize the productivity of every hour a trade spends on the job site. Poor material management—late deliveries, wrong materials, missing items—directly wastes trade labor. Second, the trades that remain are choosing which builders to work for, and they prefer builders who have their act together. A builder with excellent material management is a more attractive customer for top-tier trade contractors.</p>

    <h3>Material Price Volatility</h3>
    <p>The era of stable, predictable material prices is over. Lumber, steel, concrete, copper, and many other building materials have experienced unprecedented price swings in recent years, driven by supply chain disruptions, trade policy changes, natural disasters, and global demand shifts. This volatility makes it essential for purchasing professionals to have real-time visibility into pricing trends, to negotiate contracts with appropriate risk-sharing provisions, and to manage inventory strategically rather than reactively. Builders who rely on annual pricing agreements without monitoring market conditions in between are exposed to margin erosion when costs spike.</p>

    <h3>Competitive Pressure</h3>
    <p>The homebuilding industry is consolidating. The largest national builders continue to gain market share, and their scale advantages in purchasing grow with every acquisition. Regional and local builders cannot match national purchasing volumes, but they can compete by being more efficient in how they manage materials—reducing waste, optimizing logistics, leveraging data, and building superior trade relationships. For these builders, material management excellence is not just a cost reduction strategy—it is a competitive survival strategy.</p>

    <h3>Customer Expectations</h3>
    <p>Today's homebuyers are more informed and more demanding than ever. They expect quality construction, on-time delivery, and competitive pricing. Material management failures—whether they manifest as construction defects, schedule delays, or cost overruns that force price increases—directly impact the builder's ability to meet these expectations. In a market where reputation and customer reviews drive future sales, the operational excellence enabled by good material management translates directly into commercial success.</p>

    <h3>The Cost of Waiting</h3>
    <p>Every month that a builder delays investing in material management improvement is a month of unrealized savings. If the improvement program described in this course can deliver a 3 to 5 percent reduction in material costs, the financial impact of each month of delay can be calculated precisely. For a builder constructing 200 homes per year, even a conservative 3 percent savings on $100,000 in average material cost yields $600,000 annually. Delaying implementation by six months costs $300,000 in foregone savings. The urgency is not theoretical—it is measurable in real dollars.</p>
  </section>
</div>
    `,
    order: 11
  },
  {
    moduleNumber: 12,
    title: "Japanese Influence on U.S. Homebuilding",
    description: "Explore how lean manufacturing principles from the Japanese automotive industry have transformed and continue to influence residential construction practices.",
    content: `
<div class="module-content">
  <section class="learning-objectives">
    <h2>Learning Objectives</h2>
    <ul>
      <li>Trace the historical transfer of lean principles from Japanese manufacturing to U.S. homebuilding</li>
      <li>Explain key lean concepts including just-in-time delivery, waste elimination, and continuous improvement</li>
      <li>Identify specific applications of lean principles in residential construction purchasing</li>
      <li>Describe the Toyota Production System's relevance to material management in homebuilding</li>
      <li>Apply lean thinking to identify and eliminate waste in your own purchasing processes</li>
    </ul>
  </section>

  <section class="content-section">
    <h2>Overview</h2>
    <p>The most transformative ideas in residential construction material management did not originate in the homebuilding industry. They came from the Japanese automotive industry, specifically from the Toyota Production System developed in the decades following World War II. The principles of lean manufacturing—eliminating waste, delivering just in time, building quality in at the source, and pursuing continuous improvement—have proven remarkably applicable to residential construction. Understanding these principles and their origins provides purchasing professionals with a powerful intellectual framework for driving improvement.</p>

    <h3>The Toyota Production System</h3>
    <p>The Toyota Production System, developed by Taiichi Ohno and Shigeo Shingo, revolutionized manufacturing by focusing relentlessly on the elimination of waste. Toyota identified seven types of waste: overproduction, waiting, transportation, over-processing, inventory, motion, and defects. Every activity that does not add value from the customer's perspective is waste and should be eliminated or minimized. This framework, when applied to residential construction material management, reveals enormous opportunities for improvement that are invisible under traditional thinking.</p>

    <h3>Lean Principles Applied to Construction Purchasing</h3>
    <p>Each of Toyota's seven wastes has a direct parallel in homebuilder purchasing. Overproduction manifests as ordering materials before they are needed or in quantities exceeding what the plan requires. Waiting occurs when trade crews are idle because materials have not arrived. Transportation waste shows up in the multiple deliveries and re-handling events discussed in Module 3. Over-processing appears when materials are specified at a higher grade or quality than the application requires. Excess inventory means materials sitting on the job site for days or weeks before installation, exposed to weather, theft, and damage. Unnecessary motion occurs when trades must search through disorganized material piles to find what they need. And defects arise when incorrect materials are ordered, damaged materials are installed, or rework is required.</p>

    <h3>Just-in-Time in Homebuilding</h3>
    <p>The just-in-time principle—delivering materials in the right quantity, at the right time, to the right place—is the foundation of modern material management in residential construction. While perfect just-in-time delivery is more challenging in construction than in factory production (because job sites are dispersed and schedules are subject to weather and other variables), the principle still applies directionally. Builders who move closer to just-in-time delivery reduce inventory carrying costs, minimize damage and waste, and improve cash flow. The kitting and date-needed data concepts discussed in earlier modules are practical applications of just-in-time thinking.</p>

    <h3>Kaizen: Continuous Improvement</h3>
    <p>Perhaps the most important concept from the Japanese manufacturing tradition is kaizen—the commitment to continuous, incremental improvement. Kaizen teaches that perfection is never achieved but always pursued, that every process can be improved, and that the people closest to the work are best positioned to identify improvement opportunities. In a purchasing context, this means creating a culture where team members at every level are encouraged to identify waste, suggest improvements, and test new approaches. It means measuring performance consistently and celebrating progress, no matter how small. The builders who embrace kaizen in their purchasing organizations develop a compounding advantage that grows stronger with each passing year.</p>

    <h3>Lessons for the Future</h3>
    <p>The application of lean principles to residential construction is still in its early stages. While some leading builders have made significant progress, the industry as a whole has barely scratched the surface of what is possible. As technology improves—enabling better data collection, more sophisticated analytics, and tighter integration between design, purchasing, and construction systems—the potential for lean-inspired improvement will only grow. Purchasing professionals who understand and internalize these principles will be at the forefront of the industry's transformation.</p>
  </section>
</div>
    `,
    order: 12
  }
];

const quizQuestions = [
  // ===== MODULE 1: Importance of Managing Building Materials Well =====
  { moduleNumber: 1, question: "What percentage of total home construction cost do building materials typically represent?", optionA: "20 to 30 percent", optionB: "45 to 55 percent", optionC: "60 to 70 percent", optionD: "75 to 85 percent", correct: "B" },
  { moduleNumber: 1, question: "Which of the following is considered a hidden cost of materials that goes beyond invoice price?", optionA: "The architect's design fee", optionB: "The real estate agent's commission", optionC: "Damage and theft losses on the job site", optionD: "The homebuyer's closing costs", correct: "C" },
  { moduleNumber: 1, question: "A builder constructing 500 homes per year at $120,000 average material cost achieves a 3% reduction. What is the annual savings?", optionA: "$900,000", optionB: "$1.2 million", optionC: "$1.8 million", optionD: "$2.4 million", correct: "C" },
  { moduleNumber: 1, question: "What range of net profit margins does the homebuilding industry typically operate within?", optionA: "1 to 3 percent", optionB: "5 to 10 percent", optionC: "15 to 20 percent", optionD: "25 to 30 percent", correct: "B" },
  { moduleNumber: 1, question: "According to industry studies, the total cost of materials can be how much higher than invoice price when hidden costs are included?", optionA: "5 to 10 percent", optionB: "15 to 25 percent", optionC: "30 to 40 percent", optionD: "50 to 60 percent", correct: "B" },
  { moduleNumber: 1, question: "Which of the following is NOT a reason why material management improvement is urgent right now?", optionA: "Labor shortages", optionB: "Volatile material prices", optionC: "Declining homebuyer demand", optionD: "Supply chain disruptions", correct: "C" },
  { moduleNumber: 1, question: "What distinguishes a strategic purchasing professional from a transactional one?", optionA: "The strategic professional focuses only on getting the lowest unit price", optionB: "The strategic professional connects material decisions to business outcomes like cycle time and warranty costs", optionC: "The strategic professional delegates all decisions to suppliers", optionD: "The strategic professional avoids interacting with construction teams", correct: "B" },
  { moduleNumber: 1, question: "Why do material cost savings flow directly to the bottom line?", optionA: "Because material costs are tax deductible", optionB: "Because they require additional home sales to realize", optionC: "Because every dollar saved on materials is a dollar of additional profit without needing more revenue", optionD: "Because material savings are recorded as revenue", correct: "C" },
  { moduleNumber: 1, question: "Which team must a modern purchasing professional coordinate with for effective material management?", optionA: "Marketing and sales only", optionB: "Design, construction, and finance teams", optionC: "Legal and compliance only", optionD: "Human resources and recruiting", correct: "B" },
  { moduleNumber: 1, question: "What type of competitive advantage does disciplined material management create?", optionA: "A temporary advantage that disappears when competitors copy it", optionB: "No real competitive advantage since all builders have access to the same materials", optionC: "An advantage limited to the first year of implementation", optionD: "A durable advantage that compounds over time through better data and processes", correct: "D" },
  { moduleNumber: 1, question: "Which of the following costs is included in the 'true cost' of building materials?", optionA: "Land acquisition cost", optionB: "Marketing expenses", optionC: "Freight and delivery charges", optionD: "Sales commissions", correct: "C" },
  { moduleNumber: 1, question: "What is the primary reason many builders fail to achieve optimal material management?", optionA: "They treat purchasing as transactional rather than strategic", optionB: "Materials are too expensive to manage", optionC: "Suppliers refuse to cooperate with builders", optionD: "Government regulations prevent optimization", correct: "A" },
  { moduleNumber: 1, question: "What impact do material management improvements have on customer satisfaction?", optionA: "No impact since customers only care about price", optionB: "Negative impact because it slows down construction", optionC: "Positive impact through fewer defects, on-time delivery, and competitive pricing", optionD: "Customer satisfaction is unrelated to material management", correct: "C" },
  { moduleNumber: 1, question: "How does labor cost relate to material management?", optionA: "Rework caused by incorrect materials increases total labor cost", optionB: "Labor and material costs are completely independent", optionC: "Better material management increases labor cost", optionD: "Labor costs only apply to trade contractors, not builders", correct: "A" },
  { moduleNumber: 1, question: "What happens to material cost savings when they are expressed as a percentage of revenue?", optionA: "They represent a large share because margins are tight in homebuilding", optionB: "They appear insignificant", optionC: "They have no relationship to revenue", optionD: "They decrease the builder's revenue", correct: "A" },
  { moduleNumber: 1, question: "Which factor makes material management increasingly important for regulatory compliance?", optionA: "Increasing regulatory complexity around building codes and energy standards", optionB: "Zoning law changes", optionC: "Reduction in building inspections", optionD: "Elimination of permit requirements", correct: "A" },
  { moduleNumber: 1, question: "What is the primary purpose of this course?", optionA: "To teach homebuyers how to select materials for their homes", optionB: "To certify trade contractors in material installation", optionC: "To train architects on material specification", optionD: "To equip purchasing professionals with a comprehensive perspective and practical tools", correct: "D" },
  { moduleNumber: 1, question: "Which of the following best describes the virtuous cycle created by good material management?", optionA: "Lower prices lead to lower quality which leads to customer complaints", optionB: "More suppliers lead to more complexity and higher costs", optionC: "Increased purchasing staff leads to higher overhead costs", optionD: "Better data, stronger supplier relationships, and efficient processes create compounding improvement", correct: "D" },
  { moduleNumber: 1, question: "What percentage of total cost leakage does the industry experience due to poor material management?", optionA: "The module states it amounts to billions across the industry annually", optionB: "Less than $100 million industry-wide", optionC: "Approximately $500 million", optionD: "The industry has no measurable cost leakage", correct: "A" },
  { moduleNumber: 1, question: "Why is material management considered a 'controllable' cost?", optionA: "Because government agencies regulate material prices", optionB: "Because builders have no influence over material costs", optionC: "Because purchasing decisions, logistics, and waste are within the builder's power to improve", optionD: "Because suppliers control all aspects of material cost", correct: "C" },
  // ===== MODULE 2: What Homebuilders Have Done Well =====
  { moduleNumber: 2, question: "What is the primary benefit of national purchasing programs for large production homebuilders?", optionA: "They eliminate the need for local suppliers", optionB: "They aggregate demand to negotiate pricing significantly below retail and distributor cost", optionC: "They allow builders to manufacture their own materials", optionD: "They replace the need for a purchasing department", correct: "B" },
  { moduleNumber: 2, question: "How do standardized option packages benefit a homebuilder's purchasing operation?", optionA: "They eliminate all homebuyer choices", optionB: "They increase the number of unique SKUs that must be tracked", optionC: "They reduce material complexity while giving buyers meaningful choices", optionD: "They make every home identical with no customization", correct: "C" },
  { moduleNumber: 2, question: "What is the advantage of supplier partnerships over purely transactional relationships?", optionA: "They allow the builder to avoid paying invoices", optionB: "They create value beyond price through improved reliability, reduced lead times, and innovation", optionC: "They eliminate the need for quality inspections", optionD: "They guarantee the lowest possible price on every item", correct: "B" },
  { moduleNumber: 2, question: "Which technology has helped builders improve purchasing accuracy and speed?", optionA: "Social media marketing platforms", optionB: "Customer relationship management software", optionC: "Digital takeoff tools and electronic plan distribution", optionD: "Home design virtual reality systems", correct: "C" },
  { moduleNumber: 2, question: "Why is it important to acknowledge what builders have done well before discussing improvements?", optionA: "To avoid offending builders who resist change", optionB: "To understand the foundation of good practices upon which further improvement can be built", optionC: "To prove that no further improvement is needed", optionD: "To justify higher material prices", correct: "B" },
  { moduleNumber: 2, question: "What is a key benefit of product standardization for suppliers?", optionA: "Suppliers can charge premium prices", optionB: "Suppliers can plan production runs around predictable demand patterns", optionC: "Suppliers can reduce their product quality", optionD: "Suppliers can limit the number of builders they serve", correct: "B" },
  { moduleNumber: 2, question: "What categories are typically covered by national purchasing agreements?", optionA: "Only lumber and concrete", optionB: "Windows, appliances, HVAC systems, plumbing fixtures, and other major categories", optionC: "Only paint and finish materials", optionD: "Only roofing and siding", correct: "B" },
  { moduleNumber: 2, question: "How does product standardization affect warranty management?", optionA: "It has no impact on warranty", optionB: "It complicates warranty because there are fewer product options to choose from", optionC: "It simplifies warranty management through consistency in specifications", optionD: "It eliminates the need for warranty entirely", correct: "C" },
  { moduleNumber: 2, question: "What happens when a builder and supplier share data openly?", optionA: "Both parties can make better decisions and eliminate waste from the system", optionB: "The supplier gains an unfair advantage", optionC: "The builder loses negotiating leverage permanently", optionD: "Data sharing creates legal liability for both parties", correct: "A" },
  { moduleNumber: 2, question: "What does the evolution from adversarial to collaborative supplier relationships indicate?", optionA: "Builders have become weaker negotiators", optionB: "Suppliers now control the homebuilding market", optionC: "The industry recognizes that partnership creates more value than pure price competition", optionD: "Government regulations forced builders to collaborate with suppliers", correct: "C" },
  { moduleNumber: 2, question: "Which of the following is an example of curated option management?", optionA: "Allowing unlimited custom material selections for every home", optionB: "Letting trade contractors choose all materials", optionC: "Eliminating all options and building only base-model homes", optionD: "Offering structured option packages that provide meaningful buyer choices within a manageable range", correct: "D" },
  { moduleNumber: 2, question: "What was the primary driver behind builders developing volume purchasing programs?", optionA: "Government mandates requiring bulk purchasing", optionB: "A desire to eliminate regional suppliers from the market", optionC: "Supplier refusal to sell in small quantities", optionD: "The realization that aggregating demand across communities creates significant pricing leverage", correct: "D" },
  { moduleNumber: 2, question: "How does ERP system adoption benefit the purchasing function?", optionA: "It replaces all human decision making in purchasing", optionB: "It eliminates the need for supplier negotiations", optionC: "It reduces manual effort in estimating, ordering, and tracking materials", optionD: "It is primarily a marketing tool with no purchasing benefit", correct: "C" },
  { moduleNumber: 2, question: "What additional benefit do national programs create beyond cost savings?", optionA: "They prevent local builders from competing", optionB: "They eliminate the need for material inspections", optionC: "They allow builders to bypass local building codes", optionD: "They create consistency in product specification which simplifies training and reduces installation errors", correct: "D" },
  { moduleNumber: 2, question: "Why might there still be significant room for improvement in technology adoption despite progress to date?", optionA: "The technology available has not been widely or fully implemented across all purchasing functions", optionB: "Technology does not apply to homebuilding", optionC: "All possible technology improvements have already been made", optionD: "Builders prefer manual processes over technology", correct: "A" },
  { moduleNumber: 2, question: "What role does training play in the success of standardized material specifications?", optionA: "Consistent specifications simplify training because installers learn one approach rather than many", optionB: "Training is unnecessary when materials are standardized", optionC: "Training becomes more complex with standardization", optionD: "Only suppliers need training, not installers", correct: "A" },
  { moduleNumber: 2, question: "How do collaborative supplier relationships accelerate innovation?", optionA: "Suppliers invest in developing new products and solutions when they have a stable partner relationship", optionB: "They don't—innovation comes only from manufacturers", optionC: "Innovation slows down when relationships become too comfortable", optionD: "Only adversarial relationships drive innovation through competition", correct: "A" },
  { moduleNumber: 2, question: "What is a practical benefit of sharing forecasts with key suppliers?", optionA: "It locks the builder into purchasing specific quantities regardless of demand changes", optionB: "Sharing forecasts has no practical benefit", optionC: "It gives suppliers confidential business information they can use against the builder", optionD: "It allows the supplier to plan production and inventory, improving delivery reliability and potentially reducing cost", correct: "D" },
  { moduleNumber: 2, question: "What is the relationship between purchasing innovation and builder profitability?", optionA: "Purchasing innovation has no impact on profitability", optionB: "Purchasing innovation increases costs due to implementation expenses", optionC: "Only sales and marketing innovation affects profitability", optionD: "Innovations like volume programs, standardization, and technology have meaningfully reduced costs and improved quality", correct: "D" },
  { moduleNumber: 2, question: "Why are the practices described in this module considered a 'foundation' for further improvement?", optionA: "Because they established capabilities and relationships that enable the more advanced strategies covered in later modules", optionB: "Because they represent the maximum possible improvement", optionC: "Because no further improvement is possible", optionD: "Because they are required by law before additional changes can be made", correct: "A" },
  // ===== MODULE 3: Logistics—Less Tire Tracks Equals Less Cost =====
  { moduleNumber: 3, question: "What does the principle 'less tire tracks equals less cost' mean?", optionA: "Builders should use smaller trucks to reduce tire wear", optionB: "Reducing the number of deliveries to a job site reduces overall cost", optionC: "Roads near job sites should be paved to reduce tire marks", optionD: "Builders should avoid using heavy equipment on the lot", correct: "B" },
  { moduleNumber: 3, question: "What is the estimated logistics cost per delivery trip to a residential job site?", optionA: "$10 to $25", optionB: "$25 to $50", optionC: "$75 to $200", optionD: "$500 to $1,000", correct: "C" },
  { moduleNumber: 3, question: "How many separate delivery loads does a typical home require?", optionA: "5 to 10", optionB: "10 to 15", optionC: "30 to 40", optionD: "75 to 100", correct: "C" },
  { moduleNumber: 3, question: "Which of the following is a consolidation strategy for reducing deliveries?", optionA: "Ordering materials from as many different suppliers as possible", optionB: "Using staging yards where materials from multiple suppliers are consolidated onto a single truck", optionC: "Requiring trade contractors to pick up their own materials", optionD: "Eliminating material deliveries entirely", correct: "B" },
  { moduleNumber: 3, question: "How does poor delivery timing affect trade contractor productivity?", optionA: "It has no effect on trade productivity", optionB: "Trades can always find other work while waiting for materials", optionC: "Trade crews stand idle or must work around missing items, increasing cost and extending cycle time", optionD: "Trades prefer delayed deliveries so they can start later", correct: "C" },
  { moduleNumber: 3, question: "What is a key metric for measuring logistics performance?", optionA: "The color of delivery trucks", optionB: "Deliveries per home", optionC: "The number of suppliers used per community", optionD: "The weight of materials delivered", correct: "B" },
  { moduleNumber: 3, question: "By how much can builders typically reduce deliveries per home through logistics optimization?", optionA: "5 to 10 percent", optionB: "20 to 30 percent", optionC: "50 to 60 percent", optionD: "75 to 80 percent", correct: "B" },
  { moduleNumber: 3, question: "What problem occurs when materials are delivered weeks before they are needed?", optionA: "The materials improve in quality over time", optionB: "They sit exposed to weather, theft, and damage", optionC: "They automatically organize themselves on the job site", optionD: "Early delivery has no drawbacks", correct: "B" },
  { moduleNumber: 3, question: "What is the ideal delivery timing in relation to construction schedule?", optionA: "Materials should arrive at the start of the project regardless of when they are needed", optionB: "Timing does not matter as long as the price is good", optionC: "Materials should arrive after the trade has completed their work", optionD: "Materials should arrive just before they are needed—not too early and not too late", correct: "D" },
  { moduleNumber: 3, question: "Which delivery logistics metric tracks how often orders arrive complete and correct?", optionA: "Delivery speed", optionB: "Driver satisfaction score", optionC: "Truck fuel efficiency", optionD: "Delivery accuracy rate", correct: "D" },
  { moduleNumber: 3, question: "What is the purpose of coordinating delivery windows?", optionA: "To ensure materials arrive when they will be used, not too early or too late", optionB: "To give drivers flexible schedules", optionC: "To limit the hours during which suppliers can deliver", optionD: "To reduce the builder's payment obligations", correct: "A" },
  { moduleNumber: 3, question: "How does a construction site staging area benefit logistics?", optionA: "It provides a designated space for material deliveries and parking, reducing site disruption", optionB: "It is only used for worker break areas", optionC: "It serves no logistics purpose", optionD: "It increases the number of required deliveries", correct: "A" },
  { moduleNumber: 3, question: "What is a return trip in the context of delivery logistics?", optionA: "A scheduled delivery that arrives on time", optionB: "A trip made to pick up recyclable materials from the job site", optionC: "The truck's return to the distribution center after a successful delivery", optionD: "An additional trip required because the original order was incorrect or incomplete", correct: "D" },
  { moduleNumber: 3, question: "What role does the superintendent play in the delivery process?", optionA: "No role—deliveries are entirely the supplier's responsibility", optionB: "They schedule all deliveries without input from purchasing", optionC: "They only sign the invoice after materials are installed", optionD: "They must be present to verify the delivery and direct material placement", correct: "D" },
  { moduleNumber: 3, question: "How does reducing deliveries impact job site safety?", optionA: "Fewer deliveries mean fewer truck movements, reducing potential safety hazards", optionB: "It has no impact on safety", optionC: "More deliveries are actually safer because loads are lighter", optionD: "Safety is only a concern during foundation work", correct: "A" },
  { moduleNumber: 3, question: "What is the relationship between logistics optimization and cycle time?", optionA: "Better logistics increases cycle time", optionB: "Logistics has no relationship to cycle time", optionC: "Optimized logistics reduces cycle time by ensuring materials are available when trades need them", optionD: "Cycle time is only affected by labor availability", correct: "C" },
  { moduleNumber: 3, question: "Which approach to delivery scheduling creates the most efficient builder operations?", optionA: "Random deliveries whenever the supplier has available trucks", optionB: "Deliveries scheduled only when the superintendent requests them by phone", optionC: "All materials for the entire home delivered on day one", optionD: "Deliveries tightly coordinated with the construction schedule so trades can begin work immediately", correct: "D" },
  { moduleNumber: 3, question: "What is the 'damage rate per delivery' metric used for?", optionA: "To measure the percentage of delivered materials that arrive damaged and unusable", optionB: "To track how often delivery trucks are damaged in transit", optionC: "To assess road conditions near job sites", optionD: "To evaluate the structural integrity of the home being built", correct: "A" },
  { moduleNumber: 3, question: "Why should builders track the number of deliveries per home as a KPI?", optionA: "Because each delivery carries cost beyond the material value, and reducing deliveries directly lowers total cost", optionB: "To comply with local traffic regulations", optionC: "To negotiate lower fuel prices with trucking companies", optionD: "Because suppliers require this data for their own reporting", correct: "A" },
  { moduleNumber: 3, question: "What happens to trade contractor relationships when logistics are well-managed?", optionA: "Trades become less reliable because they have less to do", optionB: "Relationships deteriorate because trades lose control over material sourcing", optionC: "Relationships improve because trades can maintain continuous workflow without delays", optionD: "Trade relationships are unaffected by logistics", correct: "C" },
  // ===== MODULE 4: Using Builder Supplied Materials =====
  { moduleNumber: 4, question: "What is a builder-supplied material?", optionA: "A material manufactured by the homebuilder", optionB: "A material purchased directly by the builder and provided to the trade for installation", optionC: "A material donated by a supplier as a sample", optionD: "A material that the homebuyer selects and purchases independently", correct: "B" },
  { moduleNumber: 4, question: "What is the typical markup range that trade contractors add to materials in their bids?", optionA: "1 to 5 percent", optionB: "10 to 30 percent", optionC: "40 to 50 percent", optionD: "60 to 75 percent", correct: "B" },
  { moduleNumber: 4, question: "Which of the following is NOT a characteristic of a good builder-supplied material candidate?", optionA: "High material value relative to labor", optionB: "Standardized specifications across plans", optionC: "Custom fabrication requirements unique to each home", optionD: "Stable demand patterns enabling volume purchasing", correct: "C" },
  { moduleNumber: 4, question: "What operational capability is essential for a successful builder-supplied material program?", optionA: "A large marketing department", optionB: "Accurate takeoff capabilities to order correct quantities for each plan", optionC: "A fleet of delivery trucks owned by the builder", optionD: "An in-house manufacturing facility", correct: "B" },
  { moduleNumber: 4, question: "How should builders adjust trade contractor pricing when transitioning to builder-supplied materials?", optionA: "Keep the same total price since nothing has changed", optionB: "Increase the trade's price to compensate for inconvenience", optionC: "Adjust to labor-only pricing that reflects the reduced scope", optionD: "Eliminate trade contractor payments entirely", correct: "C" },
  { moduleNumber: 4, question: "Why do some trade contractors welcome builder-supplied material programs?", optionA: "Because they earn more profit on labor-only work", optionB: "Because it reduces their working capital requirements and simplifies bidding", optionC: "Because they no longer need skilled workers", optionD: "Because it allows them to charge the builder a storage fee", correct: "B" },
  { moduleNumber: 4, question: "Which material category is commonly builder-supplied in production homebuilding?", optionA: "Decorative landscaping", optionB: "Lumber packages", optionC: "Cleaning supplies", optionD: "Office furniture for the model home", correct: "B" },
  { moduleNumber: 4, question: "What is the key to maintaining strong trade relationships during a builder-supplied transition?", optionA: "Avoiding communication about the changes", optionB: "Forcing trades to accept the new arrangement without discussion", optionC: "Transparency about scope changes and reliable material delivery", optionD: "Paying trades extra as a goodwill gesture unrelated to scope", correct: "C" },
  { moduleNumber: 4, question: "What risk does a builder face when running a builder-supplied program without adequate infrastructure?", optionA: "No risk—the program always works regardless of infrastructure", optionB: "Trade contractors will demand higher wages", optionC: "Suppliers will refuse to sell to the builder", optionD: "Creating more problems than they solve through ordering errors, late deliveries, and shortages", correct: "D" },
  { moduleNumber: 4, question: "What is the financial benefit of a builder purchasing materials in volume across many communities?", optionA: "The builder pays the same price as individual trades", optionB: "There is no financial benefit to volume purchasing", optionC: "Volume purchasing increases material costs due to storage requirements", optionD: "The builder can negotiate pricing from manufacturers significantly lower than what trades can achieve", correct: "D" },
  { moduleNumber: 4, question: "Which of the following categories might be better left with the trade contractor rather than builder-supplied?", optionA: "Materials with high variability and custom fabrication requirements", optionB: "Standard windows with consistent specifications", optionC: "Insulation with standardized R-values", optionD: "Garage doors with a limited number of styles", correct: "A" },
  { moduleNumber: 4, question: "What must the builder's purchasing system do to support builder-supplied programs?", optionA: "Generate orders in time to meet the construction schedule", optionB: "Only process orders once per quarter", optionC: "Allow superintendents to order whatever they want without oversight", optionD: "Focus exclusively on finding the lowest price regardless of timing", correct: "A" },
  { moduleNumber: 4, question: "What happens to a trade contractor's profit when builder-supplied materials replace trade-supplied materials?", optionA: "The trade's profit increases automatically", optionB: "The trade's profit is unaffected", optionC: "The trade loses material markup which is a meaningful portion of their profit", optionD: "The trade gains additional profit from reduced responsibility", correct: "C" },
  { moduleNumber: 4, question: "What is the role of inventory management in a builder-supplied program?", optionA: "Inventory management is unnecessary for builder-supplied programs", optionB: "It focuses solely on warehouse operations", optionC: "It only matters for trade-supplied materials", optionD: "It tracks what has been ordered, delivered, and installed to prevent shortages or overages", correct: "D" },
  { moduleNumber: 4, question: "Why do builders with volume purchasing power achieve better pricing than individual trade contractors?", optionA: "Because the builder's aggregated demand across communities gives them greater leverage with manufacturers", optionB: "Because trades are poor negotiators", optionC: "Because suppliers give preferential treatment to builders over trades", optionD: "Because trade contractors purchase higher quality materials", correct: "A" },
  { moduleNumber: 4, question: "For which high-value category can builder-supplied savings amount to hundreds of dollars per home?", optionA: "Paint brushes and rollers", optionB: "Temporary fencing", optionC: "Paper towels and cleaning supplies", optionD: "Lumber, windows, roofing, and insulation", correct: "D" },
  { moduleNumber: 4, question: "What defines the 'scope of work' change when moving to builder-supplied materials?", optionA: "The trade's responsibility shifts from furnish-and-install to install-only", optionB: "The trade does more work for the same price", optionC: "The trade takes on both material supply and installation", optionD: "The scope does not change", correct: "A" },
  { moduleNumber: 4, question: "What is a reliable supply chain important for in a builder-supplied program?", optionA: "Minimizing the risk of delays that would leave trades without materials to install", optionB: "It is not important—any supply chain will work", optionC: "Ensuring the builder can return unused materials easily", optionD: "Allowing the builder to change specifications frequently", correct: "A" },
  { moduleNumber: 4, question: "How does a builder-supplied program affect the bidding process for trades?", optionA: "It makes bidding more complex because trades must estimate material costs more carefully", optionB: "It requires trades to submit bids from multiple suppliers", optionC: "It eliminates the need for bidding entirely", optionD: "It simplifies bidding because trades only need to price labor, not materials", correct: "D" },
  { moduleNumber: 4, question: "What is the hallmark of a sophisticated purchasing organization regarding builder-supplied decisions?", optionA: "Making all materials builder-supplied regardless of category", optionB: "Leaving all materials with trade contractors to avoid complexity", optionC: "Getting the right balance between builder-supplied and trade-supplied based on thoughtful criteria", optionD: "Randomly alternating between builder-supplied and trade-supplied on each project", correct: "C" },
  // ===== MODULE 5: Material Kitting for Greater Efficiencies =====
  { moduleNumber: 5, question: "What is material kitting in residential construction?", optionA: "Storing extra materials in a warehouse for future use", optionB: "Pre-assembling all materials needed for a specific task into a single package delivered ready for installation", optionC: "Purchasing materials from a kit home manufacturer", optionD: "Allowing trade contractors to bring their own materials to the site", correct: "B" },
  { moduleNumber: 5, question: "What document forms the basis for creating a material kit?", optionA: "The homebuyer's wish list", optionB: "The trade contractor's estimate", optionC: "A verified bill of materials from detailed takeoffs", optionD: "The superintendent's field notes", correct: "C" },
  { moduleNumber: 5, question: "How does kitting reduce material waste?", optionA: "By encouraging trades to use leftover materials from other jobs", optionB: "By ordering materials in precise quantities from verified bills of materials rather than rounded-up estimates", optionC: "By using lower-quality materials that cost less", optionD: "Kitting does not reduce waste", correct: "B" },
  { moduleNumber: 5, question: "Which material category is among the most common and highest-value kitting applications?", optionA: "Decorative mulch", optionB: "Lumber framing packages", optionC: "Safety signage", optionD: "Temporary fencing", correct: "B" },
  { moduleNumber: 5, question: "How many separate loads might a single lumber kit replace?", optionA: "One to two", optionB: "Three to five", optionC: "Ten to fifteen", optionD: "Twenty to thirty", correct: "B" },
  { moduleNumber: 5, question: "Where are material kits typically assembled?", optionA: "On the job site by the superintendent", optionB: "At a supplier's warehouse or builder's distribution center", optionC: "At the trade contractor's shop", optionD: "At the homebuyer's current residence", correct: "B" },
  { moduleNumber: 5, question: "What benefit does kitting provide for trade contractor productivity?", optionA: "Installers can begin work immediately without sorting through piles or waiting for missing items", optionB: "Trades must sort through more materials, keeping them busy", optionC: "Trades are no longer needed since kits are self-installing", optionD: "Kitting reduces trade productivity due to package handling", correct: "A" },
  { moduleNumber: 5, question: "How does kitting affect theft and damage on the job site?", optionA: "Theft and damage increase because kits are more visible", optionB: "Kits attract more theft because they are conveniently packaged", optionC: "Kitting has no effect on theft or damage", optionD: "Theft and damage are reduced because materials spend less time sitting on the job site", correct: "D" },
  { moduleNumber: 5, question: "What is required from suppliers to make a kitting program successful?", optionA: "Suppliers need to lower their prices by 50 percent", optionB: "Suppliers must relocate their warehouses near the job site", optionC: "Close collaboration to develop and refine kit specifications and establish quality control", optionD: "No changes are needed from suppliers", correct: "C" },
  { moduleNumber: 5, question: "Within what timeframe is the return on investment for a kitting program typically realized?", optionA: "Within the first month", optionB: "The ROI is never realized", optionC: "After five years", optionD: "Within the first year of operation", correct: "D" },
  { moduleNumber: 5, question: "Which of the following is an excellent candidate for kitting?", optionA: "Plumbing rough-in kits with standardized components", optionB: "Custom architectural stone with unique cuts for each home", optionC: "Landscaping plants that vary by homebuyer preference", optionD: "Furniture for model home staging", correct: "A" },
  { moduleNumber: 5, question: "What is the role of feedback loops in a kitting program?", optionA: "They are unnecessary once the program is established", optionB: "They slow down the kitting process and should be avoided", optionC: "They only apply to quality control at the manufacturing level", optionD: "They ensure field issues are quickly incorporated into kit design for continuous improvement", correct: "D" },
  { moduleNumber: 5, question: "How does material kitting transform the material management process?", optionA: "It makes the process more reactive and dependent on field estimates", optionB: "It has no effect on the overall process", optionC: "It eliminates the need for any material management", optionD: "It transforms material management from reactive and error-prone to proactive and precision-driven", correct: "D" },
  { moduleNumber: 5, question: "What characteristic makes a material category a poor candidate for kitting?", optionA: "Multiple components that must work together", optionB: "Predictable specifications across house plans", optionC: "Highly variable specifications requiring custom fabrication for each home", optionD: "Manageable package sizes", correct: "C" },
  { moduleNumber: 5, question: "What is included in a typical construction kit delivery?", optionA: "Every item, quantity, and size needed for a defined scope of work, clearly labeled and organized", optionB: "Only the most expensive items for a phase of construction", optionC: "A random assortment of materials the supplier has in stock", optionD: "Materials for the entire home regardless of construction phase", correct: "A" },
  { moduleNumber: 5, question: "How does kitting affect delivery frequency to a job site?", optionA: "It increases delivery frequency because kits are smaller", optionB: "It has no effect on delivery frequency", optionC: "Delivery frequency drops because a single kit replaces multiple individual deliveries", optionD: "It requires daily deliveries to maintain kit freshness", correct: "C" },
  { moduleNumber: 5, question: "What upfront investment does a kitting program require?", optionA: "No upfront investment—kitting is free to implement", optionB: "Only investment in new delivery trucks", optionC: "Investment in accurate takeoff data, supplier partnerships, and logistics coordination", optionD: "Purchase of a manufacturing facility", correct: "C" },
  { moduleNumber: 5, question: "Why do ongoing savings from a kitting program compound as it matures?", optionA: "Because material prices always decrease over time", optionB: "Savings do not compound—they remain flat", optionC: "Because suppliers offer deeper discounts every year automatically", optionD: "Because accuracy improves as the program is refined based on field experience", correct: "D" },
  { moduleNumber: 5, question: "What is the difference between kitting and simply ordering materials in bulk?", optionA: "Kitting provides exact quantities for a specific scope of work in a ready-to-install package, while bulk ordering is generic", optionB: "There is no difference", optionC: "Bulk ordering is always more cost-effective than kitting", optionD: "Kitting requires more materials than bulk ordering", correct: "A" },
  { moduleNumber: 5, question: "What role does quality control play at the kit assembly point?", optionA: "It ensures that all items are correctly pulled, counted, and packaged before delivery to the job site", optionB: "Quality control is unnecessary for kits", optionC: "Quality control only applies to the installation phase", optionD: "It slows down the process and should be minimized", correct: "A" },
  // ===== MODULE 6: The Extraordinary Value of Data (SKU's & Date Needed data) =====
  { moduleNumber: 6, question: "What does SKU stand for?", optionA: "Standard Kit Unit", optionB: "Stock Keeping Unit", optionC: "Supplier Key Utility", optionD: "Schedule Known Usage", correct: "B" },
  { moduleNumber: 6, question: "Why is SKU-level data more valuable than category-level purchasing data?", optionA: "SKU-level data is actually less useful because it is too detailed", optionB: "It enables precise analysis of consumption patterns, pricing volatility, and field substitutions", optionC: "Category-level data provides all the detail needed for purchasing decisions", optionD: "SKU-level data is only useful for warehouse operations", correct: "B" },
  { moduleNumber: 6, question: "What is 'date-needed data' in construction purchasing?", optionA: "The date when the builder needs to pay the supplier's invoice", optionB: "The specific date each material item is needed on the job site based on the construction schedule", optionC: "The date when the material was manufactured", optionD: "The date when the purchase order was created", correct: "B" },
  { moduleNumber: 6, question: "What is an example of a SKU-level description versus a generic description?", optionA: "Lumber versus 2x4x8 #2 SPF kiln-dried stud", optionB: "2x4 versus wood", optionC: "Building material versus construction supply", optionD: "Stick versus board", correct: "A" },
  { moduleNumber: 6, question: "How does date-needed data benefit suppliers?", optionA: "It forces suppliers to hold excess inventory", optionB: "It allows suppliers to plan production, allocate inventory, and schedule logistics more efficiently", optionC: "It gives suppliers the power to delay deliveries", optionD: "It has no benefit for suppliers", correct: "B" },
  { moduleNumber: 6, question: "What range of material cost reductions do builders with data-driven purchasing typically achieve?", optionA: "1 to 2 percent", optionB: "5 to 10 percent", optionC: "20 to 25 percent", optionD: "40 to 50 percent", correct: "B" },
  { moduleNumber: 6, question: "What reduction in material waste do data-driven builders typically experience?", optionA: "5 to 10 percent", optionB: "50 to 60 percent", optionC: "20 to 30 percent", optionD: "No measurable reduction", correct: "C" },
  { moduleNumber: 6, question: "What question can SKU-level data answer that category-level data cannot?", optionA: "How much total lumber did we spend last quarter?", optionB: "What is our total purchasing budget?", optionC: "How many homes did we build last year?", optionD: "Which specific SKUs have volatile pricing and where are field substitutions happening?", correct: "D" },
  { moduleNumber: 6, question: "What infrastructure must be built to support date-needed data?", optionA: "Integration of the construction schedule with the purchasing system", optionB: "A new corporate headquarters", optionC: "A weather forecasting system", optionD: "A customer relationship management platform", correct: "A" },
  { moduleNumber: 6, question: "How does giving a supplier a 90-day forecast with specific delivery dates improve the relationship?", optionA: "It eliminates emergency orders and expediting fees while allowing the supplier to reduce their costs", optionB: "It doesn't—suppliers prefer receiving orders at the last minute", optionC: "It gives the supplier too much power over the builder's schedule", optionD: "It complicates the ordering process unnecessarily", correct: "A" },
  { moduleNumber: 6, question: "What is the most underutilized asset in homebuilder purchasing departments according to this module?", optionA: "The purchasing staff themselves", optionB: "Supplier relationships", optionC: "Data", optionD: "Technology budgets", correct: "C" },
  { moduleNumber: 6, question: "Without SKU-level data, what must purchasing professionals rely on?", optionA: "Precise analysis and advanced algorithms", optionB: "Detailed reports from every trade contractor", optionC: "Rules of thumb, historical averages, and educated guesses", optionD: "Government-published material cost databases", correct: "C" },
  { moduleNumber: 6, question: "What does integrating the construction schedule with the purchasing system enable?", optionA: "Automatic generation of marketing materials", optionB: "Automatic scheduling of home inspections", optionC: "Automatic approval of change orders", optionD: "Automatic generation of material need dates when a home starts or reaches a given phase", correct: "D" },
  { moduleNumber: 6, question: "Why is the competitive advantage from data infrastructure considered 'durable'?", optionA: "Because it takes significant time and investment to build, making it difficult for competitors to replicate", optionB: "Because competitors can easily replicate it overnight", optionC: "Because data never changes once collected", optionD: "Because suppliers protect builders' data advantages contractually", correct: "A" },
  { moduleNumber: 6, question: "What type of decision making does data visibility enable?", optionA: "Reactive firefighting when problems have already occurred", optionB: "Delayed decisions that require committee approval", optionC: "Gut-feeling decisions based on industry rumors", optionD: "Proactive decision making based on cost trends and consumption patterns", correct: "D" },
  { moduleNumber: 6, question: "What must suppliers be equipped to do for a data-driven purchasing system to work?", optionA: "Build their own homes to understand the builder's perspective", optionB: "Provide financing for the builder's material purchases", optionC: "Receive and process orders that include SKU-level detail and delivery date requirements", optionD: "Maintain the builder's construction schedule", correct: "C" },
  { moduleNumber: 6, question: "How does knowing which SKUs are used in every plan versus specific elevations benefit purchasing?", optionA: "It does not provide any benefit", optionB: "It only helps the design department", optionC: "It enables more precise negotiation, forecasting, and waste identification at the item level", optionD: "It increases ordering complexity without benefit", correct: "C" },
  { moduleNumber: 6, question: "What is the first step in creating SKU-level data capability?", optionA: "Developing detailed material takeoffs specifying individual SKUs rather than generic descriptions", optionB: "Hiring a data scientist", optionC: "Purchasing a new ERP system", optionD: "Conducting a company-wide data literacy training", correct: "A" },
  { moduleNumber: 6, question: "What do builders who rely on annual pricing agreements without market monitoring risk?", optionA: "Getting locked into prices that are too low for suppliers", optionB: "No risk—annual agreements protect against all price changes", optionC: "Receiving too many discount offers from suppliers", optionD: "Margin erosion when costs spike between agreement periods", correct: "D" },
  { moduleNumber: 6, question: "In an industry where margins are tight, why is data visibility described as 'extraordinarily valuable'?", optionA: "Because it impresses investors during presentations", optionB: "Because it eliminates the need for purchasing staff", optionC: "Because regulators require it", optionD: "Because it enables cost trend visibility and proactive decisions, preventing costly surprises", correct: "D" },
  // ===== MODULE 7: Long Term Relationships with Trade Contractors =====
  { moduleNumber: 7, question: "What is the primary risk of constantly rebidding trade contractor work?", optionA: "It guarantees the builder gets the lowest possible price", optionB: "It destroys trust, discourages trade investment, and ultimately increases costs", optionC: "It improves trade contractor quality through competition", optionD: "It has no risk because competition is always beneficial", correct: "B" },
  { moduleNumber: 7, question: "What are the hidden costs of trade contractor turnover?", optionA: "There are no hidden costs—switching trades only saves money", optionB: "Learning curves leading to increased defect rates, longer cycle times, and more superintendent management time", optionC: "The only cost is the time to write a new contract", optionD: "Hidden costs only apply to switching suppliers, not trades", correct: "B" },
  { moduleNumber: 7, question: "What does a builder commit to in a genuine trade partnership?", optionA: "Accepting any price the trade proposes without negotiation", optionB: "Prompt and fair payment, accurate scopes, efficient scheduling, and collaborative problem solving", optionC: "Giving every trade an equal share of work regardless of performance", optionD: "Allowing trades to set their own schedules and quality standards", correct: "B" },
  { moduleNumber: 7, question: "How does volume commitment create a 'virtuous cycle' with trade contractors?", optionA: "It does not—volume commitment is a one-way benefit for the builder", optionB: "Commitment leads to trade investment, which improves performance, which justifies continued commitment", optionC: "Volume commitment guarantees lower prices but reduces quality", optionD: "It forces trades to accept below-market pricing", correct: "B" },
  { moduleNumber: 7, question: "What should a builder track beyond bid price when evaluating trade contractors?", optionA: "Nothing—bid price is the only metric that matters", optionB: "Total cost of trade engagement including quality, schedule adherence, and transition costs", optionC: "Only the trade's annual revenue and number of employees", optionD: "The trade owner's personal credit score", correct: "B" },
  { moduleNumber: 7, question: "How should a builder respond when a long-term trade partner's performance falls short?", optionA: "Immediately rebid the work to another contractor", optionB: "Ignore the problem to maintain the relationship", optionC: "Engage in collaborative problem-solving with clear expectations and honest feedback", optionD: "Reduce the trade's pay without discussion", correct: "C" },
  { moduleNumber: 7, question: "What performance tools should be used in trade partnerships?", optionA: "Quality scorecards, schedule adherence metrics, and safety records shared regularly", optionB: "No measurement tools—trust is sufficient", optionC: "Only financial audits of the trade's books", optionD: "Secret shopper programs to spy on trade crews", correct: "A" },
  { moduleNumber: 7, question: "Why do top-tier trade contractors prefer builders with excellent material management?", optionA: "They do not have a preference—they work for whoever pays the most", optionB: "Because large builders have more lenient quality standards", optionC: "Because those builders pay the highest rates", optionD: "Because good material management means reliable work flow, less idle time, and a better working experience", correct: "D" },
  { moduleNumber: 7, question: "What is the benefit of involving key trades in pre-construction planning?", optionA: "Trades can identify potential issues before they become expensive field problems", optionB: "It slows down the planning process unnecessarily", optionC: "It gives trades the authority to change architectural designs", optionD: "It is only useful for the framing trade", correct: "A" },
  { moduleNumber: 7, question: "What happens when trade contractors are managed by fear rather than partnership?", optionA: "They become more productive and efficient", optionB: "They become more loyal to the builder", optionC: "They invest more in training and equipment", optionD: "They can only cut corners to survive, reducing quality", correct: "D" },
  { moduleNumber: 7, question: "What does 'total cost of trade engagement' include that bid price alone does not?", optionA: "Only the cost of the contract signing ceremony", optionB: "Marketing costs for the trade's business", optionC: "The trade's office rental expenses", optionD: "Defect rates, rework costs, schedule delays, superintendent time, and transition costs", correct: "D" },
  { moduleNumber: 7, question: "How does stable trade contractor crew assignment benefit a builder?", optionA: "It has no benefit—different crews bring fresh perspectives", optionB: "It allows the builder to reduce superintendent staffing to zero", optionC: "Dedicated crews learn the builder's plans, specs, and quality standards, reducing errors and improving speed", optionD: "It eliminates the need for quality inspections", correct: "C" },
  { moduleNumber: 7, question: "What is a consequence of splitting work among multiple competing trades rather than committing to one?", optionA: "Each trade invests heavily in the builder's success", optionB: "Quality automatically improves through competition", optionC: "No trade has enough volume to justify investing in dedicated crews or specialized equipment", optionD: "Pricing is always lower when multiple trades compete", correct: "C" },
  { moduleNumber: 7, question: "How does prompt payment to trade contractors affect the partnership?", optionA: "It builds trust and signals that the builder values the partnership", optionB: "It has no effect on the relationship", optionC: "It gives the trade too much leverage in negotiations", optionD: "Trades prefer delayed payments for tax purposes", correct: "A" },
  { moduleNumber: 7, question: "What role does transparency play in successful builder-trade relationships?", optionA: "Open communication about expectations, performance, and changes builds trust and enables improvement", optionB: "Transparency weakens the builder's negotiating position", optionC: "Builders should never share information with trade contractors", optionD: "Transparency is only important in written contracts, not daily operations", correct: "A" },
  { moduleNumber: 7, question: "Why do the builder's longest-tenured trades often deliver the best overall value?", optionA: "Because they have mastered the builder's plans, standards, and processes, resulting in fewer defects and faster completion", optionB: "Because they charge the lowest prices", optionC: "Because they are no longer interested in growing their business", optionD: "Because new trades always have better technology", correct: "A" },
  { moduleNumber: 7, question: "What type of scheduling helps maintain efficient trade crew utilization?", optionA: "Random scheduling that keeps trades guessing", optionB: "Scheduling based solely on the superintendent's personal preference", optionC: "Consistent, predictable scheduling that allows trades to plan their workforce efficiently", optionD: "Scheduling that maximizes gaps between phases to save money", correct: "C" },
  { moduleNumber: 7, question: "What investment can a trade make when given a volume commitment from a builder?", optionA: "Investment in lobbying for favorable regulations", optionB: "No investment is needed or expected", optionC: "Expanding into unrelated business lines", optionD: "Dedicated crews, specialized equipment, and training specific to the builder's needs", correct: "D" },
  { moduleNumber: 7, question: "How do accurate scopes of work that do not change after bid acceptance support trade partnerships?", optionA: "They have no impact on the relationship", optionB: "They benefit only the builder, not the trade", optionC: "They prevent trades from ever requesting change orders", optionD: "They allow trades to price work confidently and avoid disputes over additional costs", correct: "D" },
  { moduleNumber: 7, question: "What is the long-term result of treating trade contractors as interchangeable commodities?", optionA: "A continuously improving supply chain", optionB: "Guaranteed lowest prices through constant competition", optionC: "Higher costs, lower quality, and difficulty attracting reliable trades in a tight labor market", optionD: "Stronger trade loyalty due to competitive pressure", correct: "C" },
  // ===== MODULE 8: Effecting Material Management Improvement =====
  { moduleNumber: 8, question: "What is the primary gap between knowing what to improve and actually improving it?", optionA: "A technology problem", optionB: "A change management problem", optionC: "A budget problem", optionD: "A staffing problem", correct: "B" },
  { moduleNumber: 8, question: "Which of the following is a common source of resistance to material management improvement?", optionA: "Employees being too enthusiastic about change", optionB: "Superintendents who have been ordering materials their own way for years", optionC: "Suppliers offering too many improvement suggestions", optionD: "Trade contractors requesting more centralized purchasing", correct: "B" },
  { moduleNumber: 8, question: "What is the recommended approach for implementing material management transformation?", optionA: "Wholesale transformation across every community simultaneously", optionB: "Incremental implementation starting with a pilot community or single material category", optionC: "Waiting until all problems are solved before beginning", optionD: "Implementing changes only during the slowest sales quarter", correct: "B" },
  { moduleNumber: 8, question: "Why do wholesale purchasing transformations across all communities usually fail?", optionA: "Because communities are too far apart geographically", optionB: "Because they overwhelm the organization's capacity to absorb change", optionC: "Because suppliers cannot support company-wide changes", optionD: "Because executives always oppose large-scale changes", correct: "B" },
  { moduleNumber: 8, question: "What coalition must a purchasing leader build for successful improvement?", optionA: "Only support from the purchasing team is needed", optionB: "Active support from construction operations, finance, and executive leadership", optionC: "Support from homebuyers and real estate agents", optionD: "Approval from trade contractor associations", correct: "B" },
  { moduleNumber: 8, question: "How should purchasing improvements be framed for the construction operations team?", optionA: "In terms of cycle time reduction and trade productivity improvement", optionB: "In terms of purchasing department headcount reduction", optionC: "In terms of lower material quality to reduce cost", optionD: "In terms of increased paperwork and reporting requirements", correct: "A" },
  { moduleNumber: 8, question: "What is the most dangerous phase of an improvement initiative?", optionA: "The initial planning phase", optionB: "The budgeting phase before any work begins", optionC: "The pilot phase when results are being measured", optionD: "The period after initial implementation when attention shifts and old habits reassert", correct: "D" },
  { moduleNumber: 8, question: "What should the response be when initial improvements are achieved?", optionA: "Declare victory and move on to other priorities", optionB: "Disband the improvement team since the work is done", optionC: "Immediately begin the next transformation without pausing", optionD: "Celebrate wins to reinforce value, maintain measurement, and continue reporting", correct: "D" },
  { moduleNumber: 8, question: "What is root cause analysis used for in material management improvement?", optionA: "Determining which employee to blame for problems", optionB: "Analyzing the structural roots of trees near the building site", optionC: "Calculating the cost of root vegetables used in landscaping", optionD: "Understanding why problems exist rather than just treating symptoms", correct: "D" },
  { moduleNumber: 8, question: "Why should changes always be pilot tested before full deployment?", optionA: "Because pilots are required by construction industry regulations", optionB: "Pilots are only needed for technology changes, not process changes", optionC: "Because full deployment is always cheaper after a pilot", optionD: "To identify unforeseen issues in a low-risk environment", correct: "D" },
  { moduleNumber: 8, question: "How should improvement initiatives be framed for the finance team?", optionA: "In terms of headcount reduction and layoffs", optionB: "In terms of construction schedule acceleration only", optionC: "In terms of margin improvement and cost predictability", optionD: "In terms of trade contractor satisfaction scores", correct: "C" },
  { moduleNumber: 8, question: "What tool helps identify bottlenecks and waste in the current material management process?", optionA: "End-to-end process mapping", optionB: "Customer satisfaction surveys", optionC: "Annual performance reviews", optionD: "Competitive market analysis", correct: "A" },
  { moduleNumber: 8, question: "What does a pilot program accomplish before broader rollout?", optionA: "It proves the concept, measures results, and refines the process", optionB: "It delays the full program unnecessarily", optionC: "It only tests whether the technology works", optionD: "It generates reports for executive presentations only", correct: "A" },
  { moduleNumber: 8, question: "What is the role of accountability in sustaining improvement?", optionA: "Accountability is unnecessary if people are motivated", optionB: "Only executives need to be held accountable", optionC: "Accountability at every level ensures new processes are maintained rather than reverting to old habits", optionD: "Accountability should be limited to the purchasing department", correct: "C" },
  { moduleNumber: 8, question: "Why might purchasing team members resist new systems or processes?", optionA: "They enjoy system upgrades and always welcome new technology", optionB: "They are not intelligent enough to learn new systems", optionC: "New systems may require learning new skills and changing established work patterns", optionD: "They resist because their managers tell them to", correct: "C" },
  { moduleNumber: 8, question: "How should improvement be framed for executive leadership?", optionA: "In terms of competitive advantage and scalability", optionB: "In terms of individual trade contractor satisfaction", optionC: "In terms of purchasing department budget increases", optionD: "In terms of reducing executive workload", correct: "A" },
  { moduleNumber: 8, question: "What builds credibility with skeptics during a material management transformation?", optionA: "Promising dramatic results before any evidence exists", optionB: "Ignoring skeptics and proceeding without their input", optionC: "Starting with a pilot, proving results, and then expanding", optionD: "Hiring external consultants to override internal objections", correct: "C" },
  { moduleNumber: 8, question: "What does a cost-benefit analysis for a proposed change include?", optionA: "Only hard dollar savings", optionB: "Only the time required for meetings", optionC: "Only the implementation cost", optionD: "Both hard savings and soft benefits such as improved quality and trade satisfaction", correct: "D" },
  { moduleNumber: 8, question: "What is the difference between treating symptoms and addressing root causes?", optionA: "Treating symptoms provides temporary relief while root cause analysis creates lasting solutions", optionB: "There is no practical difference", optionC: "Root cause analysis is too expensive to be practical", optionD: "Symptom treatment is always preferable because it is faster", correct: "A" },
  { moduleNumber: 8, question: "What organizational capability does a culture of continuous improvement develop?", optionA: "The ability to maintain the status quo indefinitely", optionB: "The ability to resist all future changes", optionC: "The ability to identify opportunities, test solutions, measure results, and scale successes on an ongoing basis", optionD: "The ability to hire more staff for every new initiative", correct: "C" },
  // ===== MODULE 9: Prioritizing Strategies for Short-Term and Long-Term Benefits =====
  { moduleNumber: 9, question: "What happens when purchasing departments try to fix everything at once?", optionA: "They achieve faster results due to parallel implementation", optionB: "They fix nothing because the organization is overwhelmed", optionC: "All problems are solved within the first quarter", optionD: "Suppliers provide additional support to help", correct: "B" },
  { moduleNumber: 9, question: "What are the two axes of the prioritization matrix described in this module?", optionA: "Cost and revenue", optionB: "Impact and effort", optionC: "Time and budget", optionD: "Risk and return", correct: "B" },
  { moduleNumber: 9, question: "Which quadrant of the prioritization matrix should be pursued immediately?", optionA: "Low-impact, high-effort", optionB: "Low-impact, low-effort", optionC: "High-impact, low-effort (quick wins)", optionD: "High-impact, high-effort", correct: "C" },
  { moduleNumber: 9, question: "What should be done with low-impact, high-effort initiatives?", optionA: "Implement them first to get the hard work out of the way", optionB: "They should generally be deferred or eliminated", optionC: "They should receive the highest budget allocation", optionD: "They should be assigned to the most senior staff", correct: "B" },
  { moduleNumber: 9, question: "Which of the following is an example of a short-term win (0-6 months)?", optionA: "Full integration of purchasing and construction scheduling systems", optionB: "Predictive analytics for material pricing", optionC: "Renegotiating pricing on the highest-spend material categories", optionD: "Automated replenishment systems tied to construction milestones", correct: "C" },
  { moduleNumber: 9, question: "What timeframe is associated with medium-term investments?", optionA: "0 to 3 months", optionB: "6 to 18 months", optionC: "3 to 5 years", optionD: "5 to 10 years", correct: "B" },
  { moduleNumber: 9, question: "Which is an example of a medium-term investment (6-18 months)?", optionA: "Renegotiating a single supplier contract", optionB: "Developing SKU-level material takeoffs for all house plans", optionC: "Cleaning up purchase order processes", optionD: "Full predictive analytics deployment", correct: "B" },
  { moduleNumber: 9, question: "What is the timeframe for long-term transformational initiatives?", optionA: "1 to 3 months", optionB: "3 to 6 months", optionC: "18 to 36 months", optionD: "5 to 10 years", correct: "C" },
  { moduleNumber: 9, question: "Which is an example of a long-term transformation (18-36 months)?", optionA: "Consolidating supplier relationships", optionB: "Standardizing specifications across similar plans", optionC: "Predictive analytics for material pricing and demand forecasting", optionD: "Implementing basic delivery scheduling", correct: "C" },
  { moduleNumber: 9, question: "Why must certain initiatives come before others in the improvement roadmap?", optionA: "Because regulations require a specific sequence", optionB: "The order does not matter—any sequence works equally well", optionC: "Because suppliers mandate the implementation order", optionD: "Because later initiatives depend on the infrastructure and capabilities built by earlier ones", correct: "D" },
  { moduleNumber: 9, question: "How often should the improvement roadmap be reviewed and updated?", optionA: "Quarterly to reflect changing conditions, lessons learned, and new opportunities", optionB: "Once at the beginning and never again", optionC: "Only when a major problem occurs", optionD: "Every five years during strategic planning", correct: "A" },
  { moduleNumber: 9, question: "What dual purpose does a well-designed improvement roadmap serve?", optionA: "Planning tool and communication device", optionB: "Marketing tool and sales presentation", optionC: "Legal document and compliance record", optionD: "Budget request and staffing plan", correct: "A" },
  { moduleNumber: 9, question: "Why are short-term wins important even if they deliver smaller savings?", optionA: "They are not important—only long-term transformation matters", optionB: "They allow the purchasing department to claim credit before doing real work", optionC: "They satisfy regulatory requirements", optionD: "They build organizational confidence and momentum for larger changes", correct: "D" },
  { moduleNumber: 9, question: "What type of resources do short-term improvements typically require?", optionA: "Existing staff and systems—they optimize what is already in place", optionB: "Massive capital investment and new technology", optionC: "Hiring an entirely new purchasing team", optionD: "Building a new distribution center", correct: "A" },
  { moduleNumber: 9, question: "What does the roadmap help stakeholders understand?", optionA: "Why the purchasing department needs a larger budget", optionB: "Why improvement is unnecessary", optionC: "Why other departments should do purchasing's work", optionD: "Why certain initiatives must come before others and the strategic rationale for sequencing", correct: "D" },
  { moduleNumber: 9, question: "What is the key skill a purchasing leader must develop according to this module?", optionA: "The ability to negotiate the lowest possible price on every material", optionB: "The ability to manage a large purchasing staff", optionC: "The ability to write detailed technical specifications", optionD: "The ability to prioritize and sequence improvements—saying 'this first, then that'", correct: "D" },
  { moduleNumber: 9, question: "How should high-impact, high-effort opportunities be handled?", optionA: "They require careful planning and phased implementation as strategic investments", optionB: "Avoided entirely because they are too difficult", optionC: "Implemented immediately regardless of organizational readiness", optionD: "Delegated to external consultants entirely", correct: "A" },
  { moduleNumber: 9, question: "What creates accountability in the improvement roadmap?", optionA: "Verbal commitments during meetings", optionB: "Executive memos distributed once per year", optionC: "Annual bonus targets unrelated to improvement goals", optionD: "Clear timelines and milestones against which progress is measured", correct: "D" },
  { moduleNumber: 9, question: "What type of initiative is 'automated replenishment systems tied to construction milestones'?", optionA: "A short-term quick win", optionB: "A medium-term investment", optionC: "A long-term transformational initiative", optionD: "An unnecessary initiative that should be eliminated", correct: "C" },
  { moduleNumber: 9, question: "How do medium-term investments differ from short-term wins?", optionA: "They build new capabilities requiring more significant investment in time, training, and often technology", optionB: "They are identical in scope and effort", optionC: "They deliver smaller returns than short-term wins", optionD: "They can be implemented without any organizational change", correct: "A" },
  // ===== MODULE 10: Fast Improvements Depend on the Right Company Culture =====
  { moduleNumber: 10, question: "According to this module, what determines the speed of material management improvement more than strategy quality?", optionA: "The size of the purchasing budget", optionB: "The organizational culture of the company", optionC: "The number of suppliers in the network", optionD: "The age of the company's technology systems", correct: "B" },
  { moduleNumber: 10, question: "Which cultural characteristic enables rapid improvement?", optionA: "Decisions based on seniority and tradition", optionB: "A data-driven approach where decisions are based on evidence", optionC: "Strong departmental silos that protect each team's autonomy", optionD: "A blame culture that holds individuals accountable for every mistake", correct: "B" },
  { moduleNumber: 10, question: "What is the 'hero culture' and why does it impede improvement?", optionA: "A culture celebrating systematic prevention of problems", optionB: "A culture that rewards urgent problem-solving heroics rather than building systems to prevent problems", optionC: "A culture focused on safety and risk management", optionD: "A culture that promotes the most innovative employees", correct: "B" },
  { moduleNumber: 10, question: "What is the 'silo mentality' in the context of purchasing improvement?", optionA: "A focus on grain and agricultural material purchasing", optionB: "When departments hoard information and optimize their own metrics at the expense of collaboration", optionC: "A strategy for organizing material storage on the job site", optionD: "A lean manufacturing principle for workflow organization", correct: "B" },
  { moduleNumber: 10, question: "How does a 'blame culture' specifically hinder purchasing improvement?", optionA: "It encourages too many improvement suggestions", optionB: "It discourages people from reporting problems or suggesting changes for fear of being blamed", optionC: "It creates too much transparency in the organization", optionD: "It leads to excessive celebration of successes", correct: "B" },
  { moduleNumber: 10, question: "What must executives do to drive culture change effectively?", optionA: "Visibly support improvement by attending meetings, asking questions, celebrating successes, and holding leaders accountable", optionB: "Delegate improvement to a middle manager and focus on other priorities", optionC: "Issue a single memo about the importance of improvement", optionD: "Focus exclusively on financial results without discussing culture", correct: "A" },
  { moduleNumber: 10, question: "What happens when an executive delegates purchasing improvement without visible sponsorship?", optionA: "The initiative succeeds because the team operates independently", optionB: "The team works harder to prove themselves without executive support", optionC: "The initiative is deprioritized whenever it conflicts with other demands", optionD: "Middle managers become more empowered leaders", correct: "C" },
  { moduleNumber: 10, question: "What is the goal of building a 'continuous improvement mindset'?", optionA: "Implementing a single set of improvements and declaring victory", optionB: "Reaching a point where no further improvement is possible", optionC: "Building an ongoing organizational capability to identify opportunities, test solutions, and scale successes", optionD: "Creating a permanent improvement committee that meets monthly", correct: "C" },
  { moduleNumber: 10, question: "How should mistakes be treated in a learning-oriented culture?", optionA: "As grounds for immediate termination", optionB: "As evidence that the employee is not qualified for their role", optionC: "They should be hidden to protect the team's reputation", optionD: "As opportunities to improve processes and prevent recurrence", correct: "D" },
  { moduleNumber: 10, question: "What does 'results-focused' culture mean in the context of purchasing?", optionA: "People are measured and rewarded based on outcomes rather than activities or effort", optionB: "People are measured solely on how busy they appear", optionC: "Only financial results matter—quality and safety are secondary", optionD: "Results are only measured annually during performance reviews", correct: "A" },
  { moduleNumber: 10, question: "What cultural pattern prioritizes immediate cost savings over long-term system investments?", optionA: "The continuous improvement mindset", optionB: "Collaborative decision making", optionC: "The learning culture", optionD: "Short-term focus", correct: "D" },
  { moduleNumber: 10, question: "Why is culture described as 'not a soft topic'?", optionA: "Because it involves physical construction materials", optionB: "Because it requires software implementation", optionC: "Because it is the hardest and most important variable determining improvement speed", optionD: "Because it only affects employee satisfaction, not business results", correct: "C" },
  { moduleNumber: 10, question: "What should organizations invest in to build continuous improvement capability?", optionA: "Larger offices and better facilities", optionB: "More aggressive supplier negotiations", optionC: "People development, best practice sharing forums, and data and technology infrastructure", optionD: "Marketing campaigns to promote the company's improvement efforts", correct: "C" },
  { moduleNumber: 10, question: "What type of advantage do organizations with continuous improvement capability gain?", optionA: "An accelerating advantage over competitors who treat improvement as a one-time project", optionB: "A temporary advantage that disappears when the improvement project ends", optionC: "No measurable competitive advantage", optionD: "An advantage that only applies in a strong housing market", correct: "A" },
  { moduleNumber: 10, question: "What is the role of forums for sharing best practices across communities and divisions?", optionA: "They waste time that could be spent on actual work", optionB: "They create unnecessary competition between divisions", optionC: "They only benefit corporate staff, not field teams", optionD: "They enable successful improvements in one area to be replicated elsewhere, multiplying their impact", correct: "D" },
  { moduleNumber: 10, question: "How does collaborative culture differ from silo mentality?", optionA: "Collaborative culture shares information freely and works toward common goals rather than departmental optimization", optionB: "Collaborative culture is identical to silo mentality", optionC: "Collaborative culture eliminates all departmental boundaries", optionD: "Silo mentality is actually more effective for purchasing improvement", correct: "A" },
  { moduleNumber: 10, question: "What makes an executive champion effective in driving purchasing transformation?", optionA: "They simply approve the budget and step aside", optionB: "They replace the purchasing team with external consultants", optionC: "They manage every detail of the purchasing process personally", optionD: "They understand the strategic value of material management and invest organizational capital in driving change", correct: "D" },
  { moduleNumber: 10, question: "What is the consequence of rewarding individual heroics over systemic problem prevention?", optionA: "The organization perpetuates a cycle of crises that could have been prevented", optionB: "Problems are systematically eliminated over time", optionC: "Employees become better at preventing problems proactively", optionD: "The organization becomes more efficient with each crisis", correct: "A" },
  { moduleNumber: 10, question: "Which of the following best describes a 'data-driven' cultural attribute?", optionA: "Decisions are made by the most senior person in the room", optionB: "Every decision requires a 50-page report before approval", optionC: "Decisions are based on evidence and analysis rather than opinion or tradition", optionD: "Only the IT department uses data in their decision making", correct: "C" },
  { moduleNumber: 10, question: "Why is building the organizational muscle for change important?", optionA: "It makes one specific improvement project successful", optionB: "It is only important for organizations planning to be acquired", optionC: "It eliminates the need for leadership involvement in future initiatives", optionD: "Each successive improvement initiative becomes easier to implement as the organization learns how to change", correct: "D" },
  // ===== MODULE 11: Why The Urgency to Improve =====
  { moduleNumber: 11, question: "According to this module, the skilled labor shortage in construction is what type of problem?", optionA: "A temporary cyclical problem that will resolve itself", optionB: "A structural problem that will persist as the industry has lost a generation of workers", optionC: "A problem limited to a few geographic regions", optionD: "A problem that only affects unskilled labor positions", correct: "B" },
  { moduleNumber: 11, question: "How does the labor shortage affect material management priorities?", optionA: "It has no connection to material management", optionB: "It makes maximizing trade productivity essential, and poor material management directly wastes trade labor", optionC: "It reduces the importance of material management because labor is the bigger problem", optionD: "It means builders should focus only on recruiting and ignore material costs", correct: "B" },
  { moduleNumber: 11, question: "Why are remaining trade contractors choosing which builders to work for?", optionA: "Because government regulations require them to be selective", optionB: "Because the labor shortage gives quality trades bargaining power, and they prefer builders who manage materials well", optionC: "Because trade contractors are reducing the number of homes they build", optionD: "Because all builders offer identical working conditions", correct: "B" },
  { moduleNumber: 11, question: "What has caused unprecedented material price volatility in recent years?", optionA: "Only inflation from monetary policy", optionB: "Supply chain disruptions, trade policy changes, natural disasters, and global demand shifts", optionC: "Material manufacturers intentionally raising prices", optionD: "Decreased demand for building materials", correct: "B" },
  { moduleNumber: 11, question: "Why does material price volatility increase the importance of data-driven purchasing?", optionA: "Because data eliminates all price volatility", optionB: "Because real-time visibility into pricing trends enables proactive negotiation and risk management", optionC: "Because volatile prices make purchasing easier since everyone knows prices change", optionD: "Because suppliers share all pricing data automatically", correct: "B" },
  { moduleNumber: 11, question: "What competitive dynamic is occurring in the homebuilding industry?", optionA: "Large national builders are consolidating market share and growing their purchasing scale advantages", optionB: "The industry is becoming less competitive with more builders entering the market", optionC: "Regional builders have larger purchasing volumes than national builders", optionD: "Competition is decreasing because fewer homes are being built", correct: "A" },
  { moduleNumber: 11, question: "How can regional and local builders compete with national builders' purchasing scale?", optionA: "They cannot compete and should exit the market", optionB: "By matching national builders' volume through mergers", optionC: "By being more efficient in material management—reducing waste, optimizing logistics, leveraging data, and building superior trade relationships", optionD: "By focusing exclusively on luxury homes where material cost is less important", correct: "C" },
  { moduleNumber: 11, question: "What do today's homebuyers expect from builders?", optionA: "Quality construction, on-time delivery, and competitive pricing", optionB: "Only the lowest possible price regardless of quality", optionC: "Unlimited customization with no impact on price or schedule", optionD: "Nothing—homebuyers have no expectations about construction quality", correct: "A" },
  { moduleNumber: 11, question: "How do material management failures affect a builder's commercial success?", optionA: "They manifest as construction defects, schedule delays, and cost overruns that damage reputation and sales", optionB: "They have no commercial impact", optionC: "They only affect internal operations, not customer-facing outcomes", optionD: "They improve sales because customers sympathize with builders facing challenges", correct: "A" },
  { moduleNumber: 11, question: "For a builder constructing 200 homes per year with $100,000 average material cost, what is the annual savings from a 3% improvement?", optionA: "$100,000", optionB: "$300,000", optionC: "$600,000", optionD: "$1,200,000", correct: "C" },
  { moduleNumber: 11, question: "What is the cost of delaying a purchasing improvement program by six months for the builder in the previous question?", optionA: "$50,000", optionB: "$150,000", optionC: "$300,000 in foregone savings", optionD: "$600,000", correct: "C" },
  { moduleNumber: 11, question: "Why is material management excellence described as a 'competitive survival strategy' for smaller builders?", optionA: "Because smaller builders cannot match national purchasing volumes but can outperform through efficiency", optionB: "Because it is the only strategy available to any builder", optionC: "Because survival depends solely on material costs", optionD: "Because government mandates require material management certification", correct: "A" },
  { moduleNumber: 11, question: "What should purchasing professionals do with annual pricing agreements during volatile markets?", optionA: "Rely on them completely and ignore market conditions between agreement periods", optionB: "Abandon annual agreements entirely in favor of spot purchasing", optionC: "Monitor market conditions actively and negotiate contracts with appropriate risk-sharing provisions", optionD: "Let suppliers determine all pricing terms without negotiation", correct: "C" },
  { moduleNumber: 11, question: "What role do customer reviews and reputation play in the urgency for improvement?", optionA: "No role—customers do not discuss their building experience", optionB: "Reviews only affect resale value, not new home sales", optionC: "Only negative reviews matter; positive material management outcomes go unnoticed", optionD: "Reviews and reputation drive future sales, making operational excellence from good material management commercially critical", correct: "D" },
  { moduleNumber: 11, question: "What is the case for investing in purchasing improvement NOT about?", optionA: "Simply optimizing an existing system—it is about survival in a changing industry", optionB: "Competitive positioning and margin improvement", optionC: "Reducing material waste and improving trade productivity", optionD: "All of the above are valid aspects of the investment case", correct: "A" },
  { moduleNumber: 11, question: "What happens to builders who fail to respond to the forces described in this module?", optionA: "They maintain their current market position", optionB: "They benefit from industry consolidation", optionC: "They find themselves at an increasingly severe competitive disadvantage", optionD: "They automatically improve through natural market forces", correct: "C" },
  { moduleNumber: 11, question: "Why does the module describe the urgency as 'not theoretical'?", optionA: "Because it is based on unproven academic research", optionB: "Because only theoretical problems require urgent action", optionC: "Because urgency is a feeling, not a measurable concept", optionD: "Because the financial impact of delay can be calculated precisely in real dollars", correct: "D" },
  { moduleNumber: 11, question: "Which industry trend makes contract risk-sharing provisions more important?", optionA: "Declining material prices", optionB: "Decreasing competition among builders", optionC: "Stable and predictable supply chains", optionD: "Material price volatility driven by supply chain disruptions and trade policy changes", correct: "D" },
  { moduleNumber: 11, question: "How does inventory management strategy need to change in response to market volatility?", optionA: "No change is needed—maintain the same practices as in stable markets", optionB: "Builders should stockpile maximum inventory to hedge against shortages", optionC: "All inventory should be eliminated to reduce exposure", optionD: "Inventory should be managed strategically rather than reactively to account for supply uncertainty", correct: "D" },
  { moduleNumber: 11, question: "What multiple forces does this module describe as converging on the homebuilding industry?", optionA: "Increasing land availability and decreasing construction costs", optionB: "Government deregulation and simplified building codes", optionC: "Declining interest rates and increasing homebuyer demand", optionD: "Labor shortages, material price volatility, supply chain disruptions, and competitive consolidation", correct: "D" },
  // ===== MODULE 12: Japanese Influence on U.S. Homebuilding =====
  { moduleNumber: 12, question: "Which production system is the primary source of lean manufacturing principles applied to homebuilding?", optionA: "The Ford Assembly Line System", optionB: "The Toyota Production System", optionC: "The General Electric Six Sigma System", optionD: "The Amazon Fulfillment System", correct: "B" },
  { moduleNumber: 12, question: "Who are credited with developing the Toyota Production System?", optionA: "Henry Ford and Thomas Edison", optionB: "Taiichi Ohno and Shigeo Shingo", optionC: "W. Edwards Deming and Joseph Juran", optionD: "Jack Welch and Peter Drucker", correct: "B" },
  { moduleNumber: 12, question: "How many types of waste did Toyota identify?", optionA: "Three", optionB: "Five", optionC: "Seven", optionD: "Ten", correct: "C" },
  { moduleNumber: 12, question: "Which of the following is one of Toyota's seven wastes?", optionA: "Innovation", optionB: "Customer satisfaction", optionC: "Overproduction", optionD: "Revenue growth", correct: "C" },
  { moduleNumber: 12, question: "How does 'overproduction' waste manifest in construction purchasing?", optionA: "Building too many homes in a community", optionB: "Ordering materials before they are needed or in quantities exceeding plan requirements", optionC: "Producing too many purchase orders per day", optionD: "Hiring too many purchasing staff members", correct: "B" },
  { moduleNumber: 12, question: "What does 'waiting' waste look like in residential construction?", optionA: "Homebuyers waiting for their closing date", optionB: "Trade crews standing idle because materials have not arrived", optionC: "Suppliers waiting for payment", optionD: "Executives waiting for quarterly reports", correct: "B" },
  { moduleNumber: 12, question: "How does 'transportation' waste appear in homebuilder logistics?", optionA: "Homebuyers commuting to view model homes", optionB: "Multiple deliveries and re-handling events that add cost without adding value", optionC: "Trade contractors driving between job sites", optionD: "Corporate staff traveling to division offices", correct: "B" },
  { moduleNumber: 12, question: "What is an example of 'over-processing' waste in construction purchasing?", optionA: "Specifying materials at a higher grade or quality than the application requires", optionB: "Using the most cost-effective material available", optionC: "Processing purchase orders electronically rather than manually", optionD: "Negotiating prices with multiple suppliers", correct: "A" },
  { moduleNumber: 12, question: "How does 'excess inventory' waste manifest on a construction site?", optionA: "Having the exact right amount of materials for installation", optionB: "Storing materials in a climate-controlled warehouse", optionC: "Running out of materials and causing delays", optionD: "Materials sitting on the job site for days or weeks before installation, exposed to weather, theft, and damage", correct: "D" },
  { moduleNumber: 12, question: "What is 'unnecessary motion' waste in the context of construction?", optionA: "Workers performing their installation tasks efficiently", optionB: "Delivery drivers following optimized routes", optionC: "Superintendents walking the job site for inspections", optionD: "Trades searching through disorganized material piles to find what they need", correct: "D" },
  { moduleNumber: 12, question: "What does 'defects' waste encompass in purchasing and material management?", optionA: "Only manufacturing defects from the supplier", optionB: "Cosmetic imperfections that homebuyers notice", optionC: "Incorrect orders, damaged materials installed, and rework required due to material issues", optionD: "Design flaws in the home's architecture", correct: "C" },
  { moduleNumber: 12, question: "What is the just-in-time principle in the context of homebuilding?", optionA: "Delivering materials in the right quantity, at the right time, to the right place", optionB: "Delivering all materials at the very start of construction", optionC: "Ordering materials only after the trade contractor requests them", optionD: "Maintaining large stockpiles to ensure materials are always available", correct: "A" },
  { moduleNumber: 12, question: "Why is perfect just-in-time delivery more challenging in construction than in factory production?", optionA: "Because job sites are dispersed and schedules are subject to weather and other variables", optionB: "Because construction materials are lighter than factory materials", optionC: "Because construction workers are less skilled than factory workers", optionD: "Because just-in-time does not apply to construction at all", correct: "A" },
  { moduleNumber: 12, question: "What does the Japanese concept of 'kaizen' mean?", optionA: "Zero defects in production", optionB: "Automated manufacturing", optionC: "Maximum production output", optionD: "Continuous, incremental improvement", correct: "D" },
  { moduleNumber: 12, question: "According to kaizen philosophy, who is best positioned to identify improvement opportunities?", optionA: "The people closest to the work being performed", optionB: "External consultants who bring an objective perspective", optionC: "Senior executives with the broadest organizational view", optionD: "Technology systems that analyze data automatically", correct: "A" },
  { moduleNumber: 12, question: "How do kitting and date-needed data relate to lean principles?", optionA: "They are unrelated to lean manufacturing concepts", optionB: "They contradict the principles of lean manufacturing", optionC: "They are practical applications of just-in-time thinking in residential construction", optionD: "They are examples of overproduction waste", correct: "C" },
  { moduleNumber: 12, question: "What advantage do purchasing professionals who internalize lean principles gain?", optionA: "They have a powerful intellectual framework for identifying and eliminating waste in purchasing processes", optionB: "They become qualified to work in automotive manufacturing", optionC: "They can eliminate all waste from construction immediately", optionD: "They no longer need to negotiate with suppliers", correct: "A" },
  { moduleNumber: 12, question: "What is the current state of lean principle application in residential construction?", optionA: "The industry has fully implemented all lean principles", optionB: "Only Japanese homebuilders use lean principles", optionC: "Lean principles have been proven ineffective in construction", optionD: "Application is still in its early stages—the industry has barely scratched the surface", correct: "D" },
  { moduleNumber: 12, question: "How does technology improvement affect the potential for lean-inspired material management?", optionA: "Technology has no relationship to lean principles", optionB: "Lean principles require the elimination of all technology", optionC: "Technology makes lean principles obsolete", optionD: "Better data collection, analytics, and system integration will expand the potential for lean improvement", correct: "D" },
  { moduleNumber: 12, question: "What type of advantage do builders who embrace kaizen in purchasing develop?", optionA: "A one-time cost savings that fades over time", optionB: "An advantage limited to the first year of implementation", optionC: "A compounding advantage that grows stronger with each passing year", optionD: "No measurable advantage—kaizen is purely philosophical", correct: "C" },
];

async function main() {
  console.log('🌱 Starting seed for Purchasing Management LMS...\n');

  // Check if data already exists
  const existingModules = await prisma.module.count();
  if (existingModules > 0) {
    console.log(`⚠️  Database already has ${existingModules} modules. Skipping seed.`);
    await prisma.$disconnect();
    return;
  }

  // 1. Create Public company
  const publicCompany = await prisma.company.create({
    data: {
      companyName: 'Public',
      companyCode: 'PUBLIC',
      isPublic: true,
    },
  });
  console.log(`✅ Created company: ${publicCompany.companyName} (${publicCompany.companyCode})`);

  // 2. Create Super Admin user
  const adminPassword = await bcrypt.hash('Purchasing2026!', 12);
  const admin = await prisma.user.create({
    data: {
      name: 'Drew Stevens',
      email: 'astevens@strategem.pro',
      password: adminPassword,
      role: Role.SUPER_ADMIN,
      companyId: publicCompany.id,
    },
  });
  console.log(`✅ Created Super Admin: ${admin.name} (${admin.email})`);

  // 3. Create test student
  const studentPassword = await bcrypt.hash('teststudent123', 12);
  const student = await prisma.user.create({
    data: {
      name: 'Test Student',
      email: 'test@strategem.pro',
      password: studentPassword,
      role: Role.STUDENT,
      companyId: publicCompany.id,
    },
  });
  console.log(`✅ Created Test Student: ${student.name} (${student.email})`);

  // 4. Create all modules
  const createdModules: Record<number, string> = {};
  for (const mod of moduleData) {
    const created = await prisma.module.create({
      data: {
        moduleNumber: mod.moduleNumber,
        title: mod.title,
        description: mod.description,
        content: mod.content,
        order: mod.order,
      },
    });
    createdModules[mod.moduleNumber] = created.id;
    console.log(`  📘 Module ${mod.moduleNumber}: ${mod.title}`);
  }
  console.log(`✅ Created ${moduleData.length} modules\n`);

  // 5. Create all quiz questions linked to modules
  let questionCount = 0;
  for (const q of quizQuestions) {
    const moduleId = createdModules[q.moduleNumber];
    if (!moduleId) {
      console.error(`❌ No module found for moduleNumber ${q.moduleNumber}`);
      continue;
    }
    await prisma.quiz.create({
      data: {
        moduleId,
        questionText: q.question,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctAnswer: q.correct,
      },
    });
    questionCount++;
  }
  console.log(`✅ Created ${questionCount} quiz questions\n`);

  // 6. Create initial progress for test student on Module 1
  const module1Id = createdModules[1];
  if (module1Id) {
    await prisma.userProgress.create({
      data: {
        userId: student.id,
        moduleId: module1Id,
        videoWatched: false,
        quizPassed: false,
        quizScore: null,
        quizAttempts: 0,
      },
    });
    console.log(`✅ Created initial progress for Test Student on Module 1`);
  }

  // Summary
  console.log('\n========================================');
  console.log('  SEED SUMMARY');
  console.log('========================================');
  console.log(`  Companies:       1 (Public)`);
  console.log(`  Users:           2 (1 Super Admin, 1 Student)`);
  console.log(`  Modules:         ${moduleData.length}`);
  console.log(`  Quiz Questions:  ${questionCount}`);
  console.log(`  Progress Records: 1`);
  console.log('========================================\n');

  await prisma.$disconnect();
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    prisma.$disconnect();
    process.exit(1);
  });
