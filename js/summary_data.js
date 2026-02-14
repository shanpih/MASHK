// MAS 맨하탄 프로젝트 - 전체 진행 현황 데이터
// Source: project_summary_20260214_4.html
// Last Updated: 2026-02-14

const summaryData = {
    overallProgress: 45,
    phase: '통합 준비 & SIT 시작',

    executiveSummary: {
        text1: '현재 전체 공정률 <strong class="text-blue-600">45%</strong>로, 핵심 인프라 및 Core 시스템 구축이 완료(80%)되었습니다. 프로젝트는 계획대로 순항 중이며, 현재 <strong>통합 준비(Integration Preparation)</strong> 단계로 전환되었습니다.',
        text2: '<span class="bg-yellow-100 px-1 rounded font-bold text-gray-700">심천 BA 5명</span>을 중심으로 본격적인 <strong>SIT 테스트</strong>가 진행 중이나, Apps UI 부문의 디자인 변경으로 인한 작업량 증가가 주요 리스크로 식별되어 집중 관리가 필요합니다.'
    },

    roadmap: [
        { step: 'STEP 01', title: '기반 구축 (완료)', status: 'done', detail: '✅ SIT/UAT 환경 셋업' },
        { step: 'STEP 02 (현재)', title: '통합 준비 & SIT', status: 'current', details: ['BA SIT 테스트 시작', 'Apps UI 재설계 반영', 'VA/Data 연결'] },
        { step: 'STEP 03 (Next)', title: 'UAT & 안정화', status: 'future', detail: '사용자 인수 테스트' },
        { step: 'STEP 04 (2026.6)', title: 'Go-Live', status: 'future', detail: '정상 가동 목표' }
    ],

    team: {
        total: 9,
        composition: [
            { role: 'BA (Business Analyst)', count: 5, color: 'blue', note: '전원 경력직, 테스트 주도' },
            { role: '개발 (Dev)', count: 2, color: 'indigo', note: 'iOS 1명, Java 1명' },
            { role: '인프라/관리', count: 2, color: 'gray', note: 'Network 1명, HR 1명' }
        ],
        chartLabels: ['BA (테스트 주도)', 'iOS 개발', 'Backend Java', 'Network', 'HR'],
        chartData: [5, 1, 1, 1, 1]
    },

    itProgress: {
        labels: [
            'HKEX/US 연결 (90%)',
            'Core/Env 셋업 (80%)',
            'Itrade UI (80%)',
            '청산/결제 (80%)',
            '주문 관리 (70%)',
            'Apps UI (Risk) (40%)',
            '마켓 데이터 (30%)'
        ],
        data: [90, 80, 80, 80, 70, 40, 30]
    },

    risks: [
        { tag: 'RISK', tagColor: 'red-500', title: 'Apps UI 물량 급증', desc: '디자인 변경으로 페이지 수가 <strong>98p → 251p</strong>로 급증했습니다. 일정 지연 가능성이 있어 리소스 집중 배정이 필요합니다.' },
        { tag: 'DELAY', tagColor: 'yellow-500', title: 'VA 신청서 양식', desc: '가상계좌(VA) 개설 프로세스 개발은 완료되었으나, 신청서 양식 확정이 지연되고 있습니다.' },
        { tag: 'PENDING', tagColor: 'blue-500', title: '마켓 데이터 결정', desc: '현재 TTL Etnet 데이터로 테스트 중입니다. MAS 자체 데이터 사용 여부에 대한 의사결정이 필요합니다.' },
        { tag: 'CHECK', tagColor: 'blue-500', title: 'Corporate Action', desc: '자동화된 CA import 파일 필요 여부에 대해 MAS US 측 확인 대기 중입니다. (수동 기능 준비완료)' }
    ]
};
