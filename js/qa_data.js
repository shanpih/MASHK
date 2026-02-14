// MAS 맨하탄 프로젝트 - QA 테스트 대시보드 데이터
// Source: Shenzhen MiraeAsset Report
// Last Updated: 2026-02-14

const qaData = {
    modules: [
        {
            id: 'account',
            title: '계좌 개설 (Account Opening)',
            status: 'Issue', // Normal, Issue, Waiting
            progress: 100,
            casesTotal: 20,
            casesDone: 20,
            desc: 'H5 프론트엔드 및 메인 프로세스 검증 완료.',
            details: [
                'H5 Frontend: 7/7 Pass',
                'Main Process: 13/13 Pass',
                '🔴 잔여 버그 16건 (TTL 수정 중)'
            ]
        },
        {
            id: 'trade',
            title: '매매 시스템 (Trading)',
            status: 'Normal',
            progress: 45, // Estimated based on context
            casesTotal: 1200, // Estimated representation
            casesDone: 400,
            desc: '심천 BA 팀 집중 테스트 (주문 유형, 예외처리).',
            details: [
                '주문 유형: 지정가, 경매, Trigger',
                '유효기간: Day, GTC, GTD 검증',
                '예외: 잔고/지주 부족 거부 로직'
            ]
        },
        {
            id: 'clearing',
            title: '청산 및 결제 (Clearing)',
            status: 'Normal',
            progress: 30,
            casesTotal: 800,
            casesDone: 240,
            desc: '미국(US) 시장 장 마감 및 정산 로직 검증.',
            details: [
                '자산 변동: 장중/장마감 PSAA 확인',
                'EOD: 환율 업데이트, 계약 생성',
                '시장: US Market 기준'
            ]
        },
        {
            id: 'va',
            title: '가상자산 (Virtual Asset)',
            status: 'Normal',
            progress: 40,
            casesTotal: 300,
            casesDone: 120,
            desc: '거래 내역 조회 및 포트폴리오 UI 확인.',
            details: [
                '필터: 7일/30일/90일 조회',
                'UI: 시장 보유 비중 표기 확인'
            ]
        },
        {
            id: 'deposit',
            title: '입출금 (Deposit/Withdraw)',
            status: 'Waiting',
            progress: 0,
            casesTotal: 71,
            casesDone: 0,
            desc: '3월 5일 테스트 착수 예정.',
            details: [
                '환경: APP / AOS',
                '총 71개 케이스 대기 중'
            ]
        }
    ],
    risks: [
        { id: 'I-001', area: '계좌 개설', severity: 'High', issue: '테스트 완료 후 잔여 버그 16건 미해결', plan: 'TTL 핫픽스 일정 확약 요청 및 심천 BA 재검증' },
        { id: 'I-002', area: '청산 (Clearing)', severity: 'Medium', issue: '장 마감 데이터 검증 복잡도 증가', plan: 'US 시장 체결 데이터 셋업 정밀 점검' },
        { id: 'I-003', area: 'UI/UX', severity: 'Low', issue: '기획서와 일부 UI(이미지/텍스트) 불일치', plan: '지속적인 폴리싱(Polishing) 리스트 공유' }
    ],
    testSummary: {
        pass: 427,
        fail: 190,
        remaining: 2066,
        chartLabels: ['계좌 개설', '매매', '청산', '가상자산', '입출금'],
        chartData: [100, 45, 30, 40, 0]
    }
};
