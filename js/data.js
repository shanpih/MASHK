// MAS 맨하탄 프로젝트 - 공통 메타 정보
// Last Updated: 2026-02-14

const projectMeta = {
    name: 'MAS 맨하탄 프로젝트',
    lastUpdated: '2026-02.14',
    overallProgress: 45,
    goLiveTarget: '2026.06',
    phase: '통합 준비 & SIT 시작',
    pages: [
        {
            id: 'summary',
            title: '📊 전체 진행 현황',
            desc: 'IT 부문별 진행률, 조직 구성, 이슈 및 리스크 종합 현황',
            link: 'project_summary.html',
            badge: '주간 리포트',
            badgeColor: 'blue'
        },
        {
            id: 'test_qa',
            title: '🧪 QA 테스트 대시보드',
            desc: '모듈별 테스트 케이스 진행률, Pass/Fail 비율, 리스크 관리',
            link: 'test_qa.html',
            badge: 'SIT 테스트',
            badgeColor: 'emerald'
        }
    ]
};
