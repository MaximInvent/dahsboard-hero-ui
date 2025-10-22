import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Plus, 
  ArrowUpRight, 
  Clock, 
  UserPlus, 
  Briefcase 
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
  onStartProposal?: () => void;
  advisorName?: string;
}

export function DashboardPage({ onNavigate, onStartProposal, advisorName }: DashboardPageProps) {
  // Mock AUM data for 6-month chart
  const aumChartData = [
    { month: "May", aum: 38.5 },
    { month: "Jun", aum: 39.2 },
    { month: "Jul", aum: 39.8 },
    { month: "Aug", aum: 40.1 },
    { month: "Sep", aum: 40.5 },
    { month: "Oct", aum: 41.2 },
  ];

  // Key metrics data
  const keyMetrics = [
    {
      title: "New Clients",
      value: "3",
      change: "+2",
      changePercent: "+200%",
      isPositive: true,
      icon: UserPlus,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Client Groups",
      value: "12",
      change: "+1",
      changePercent: "+9%",
      isPositive: true,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Average Account",
      value: "$2.1M",
      change: "-$150K",
      changePercent: "-7.1%",
      isPositive: false,
      icon: DollarSign,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Pipeline AUM",
      value: "$8.5M",
      subtitle: "3 pending review",
      icon: Briefcase,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
  ];

  // Active proposals data - Updated to match screenshots
  const activeProposals = [
    {
      id: "P-2025-00044",
      name: "Martinez Retirement",
      aum: "$1.8M",
      progress: 60,
      status: "review",
      lastUpdated: "5 hours ago",
    },
    {
      id: "P-2025-00043",
      name: "Chen Holdings LLC",
      aum: "$6.5M",
      progress: 100,
      status: "active",
      lastUpdated: "1 day ago",
    },
    {
      id: "P-2025-00042",
      name: "Williams Family",
      aum: "$3.1M",
      progress: 40,
      status: "draft",
      lastUpdated: "2 days ago",
    },
    {
      id: "P-2025-00041",
      name: "Thompson Enterprises",
      aum: "$8.9M",
      progress: 95,
      status: "active",
      lastUpdated: "3 days ago",
    },
  ];

  // Priority tasks data - Updated to match screenshots
  const priorityTasks = [
    {
      title: "Review Johnson Family proposal",
      client: "Johnson Family Trust",
      dueDate: "Today",
      priority: "high",
    },
    {
      title: "Complete Martinez onboarding",
      client: "Martinez Retirement",
      dueDate: "Tomorrow",
      priority: "medium",
    },
    {
      title: "Quarterly rebalancing review",
      client: "Chen Holdings LLC",
      dueDate: "Oct 18",
      priority: "medium",
    },
  ];

  // Recent activity feed - Updated to match screenshots
  const recentActivity = [
    {
      icon: FileText,
      event: "Proposal moved to Review",
      entity: "Smith Family",
      timestamp: "2 hours ago",
      iconColor: "var(--color-activity-blue)",
      iconBg: "var(--color-activity-blue-bg)",
    },
    {
      icon: UserPlus,
      event: "New client onboarded",
      entity: "Johnson Individual Account",
      timestamp: "5 hours ago",
      iconColor: "var(--color-activity-green)",
      iconBg: "var(--color-activity-green-bg)",
    },
    {
      icon: TrendingUp,
      event: "Portfolio optimized",
      entity: "Williams Family Trust",
      timestamp: "1 day ago",
      iconColor: "var(--color-activity-purple)",
      iconBg: "var(--color-activity-purple-bg)",
    },
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "review":
        return "Review";
      case "draft":
        return "Draft";
      default:
        return status;
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2 text-gray-900">
              Welcome back{advisorName ? `, ${advisorName}` : ""}
            </h1>
            <p className="text-lg text-gray-600">{currentDate}</p>
          </div>
        <Button
          className="text-white font-medium px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: 'var(--color-quick-purple)' }}
          size="lg"
          onPress={onStartProposal}
          startContent={<Plus className="w-5 h-5" />}
        >
          New Proposal
        </Button>
        </div>

        {/* AUM Summary & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="pb-4 px-6 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">Total AUM</h3>
            </CardHeader>
            <CardBody className="pt-0 px-6 pb-6">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-gray-900">$41.2M</div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center font-medium text-green-600">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    <span>+12.3%</span>
                  </div>
                  <span className="text-gray-500">vs YTD</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden lg:col-span-2">
            <CardHeader className="pb-4 px-6 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">AUM Growth (6 Months)</h3>
            </CardHeader>
            <CardBody className="pt-0 px-6 pb-6">
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={aumChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-chart-grid)" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "var(--color-chart-text)", fontFamily: "inherit" }}
                    axisLine={{ stroke: "var(--color-chart-border)" }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "var(--color-chart-text)", fontFamily: "inherit" }}
                    axisLine={{ stroke: "var(--color-chart-border)" }}
                    domain={[38, 42]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-white)",
                      border: "1px solid var(--color-chart-border)",
                      borderRadius: "8px",
                      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                      fontFamily: "inherit"
                    }}
                    formatter={(value: any) => [`$${value}M`, "AUM"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="aum"
                    stroke="var(--color-chart-line)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-chart-line)", r: 4, strokeWidth: 2, stroke: "var(--color-white)" }}
                    activeDot={{ fill: "var(--color-chart-line)", r: 6, strokeWidth: 2, stroke: "var(--color-white)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>
        </div>

        {/* Key Metrics Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="border-0 bg-white shadow-md rounded-lg overflow-hidden" style={{ height: "140px" }}>
                <CardBody className="p-6">
                  <div className="flex items-start justify-between h-full">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-3 font-medium">{metric.title}</p>
                      <div className="text-2xl font-bold mb-2 text-gray-900">{metric.value}</div>
                      {metric.subtitle ? (
                        <p className="text-sm text-gray-500">{metric.subtitle}</p>
                      ) : metric.change ? (
                        <div className={`flex items-center gap-1 text-sm font-medium ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.isPositive ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowUpRight className="w-3 h-3 rotate-180" />
                          )}
                          <span>{metric.change}</span>
                          <span className="text-gray-500">MoM</span>
                        </div>
                      ) : null}
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      index === 0 ? 'bg-green-100' : 
                      index === 1 ? 'bg-blue-100' : 
                      index === 2 ? 'bg-cyan-100' : 'bg-purple-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        index === 0 ? 'text-green-600' : 
                        index === 1 ? 'text-blue-600' : 
                        index === 2 ? 'text-cyan-600' : 'text-purple-600'
                      }`} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Proposals Widget */}
          <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden lg:col-span-2">
            <CardHeader className="pb-4 px-6 pt-6">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Active Proposals</h3>
                  <p className="text-gray-600 mt-1 text-sm">Track progress on client proposals</p>
                </div>
                <Button
                  className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 text-gray-600"
                  variant="light"
                  size="sm"
                  onPress={() => onNavigate?.("proposals")}
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardBody className="pt-0 px-6 pb-6">
              <div className="space-y-4">
                {activeProposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-100"
                    onClick={() => onNavigate?.("proposals")}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-base font-semibold text-gray-900">{proposal.name}</h4>
                          <Chip 
                            className={`${
                              proposal.status === 'active' ? 'bg-green-100 text-green-800' :
                              proposal.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            } font-medium text-xs px-2 py-1 rounded-full`}
                            size="sm"
                            variant="flat"
                          >
                            {getStatusLabel(proposal.status)}
                          </Chip>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="font-mono text-gray-900 font-medium">{proposal.id}</span>
                          <span>•</span>
                          <span className="font-semibold">{proposal.aum}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{proposal.lastUpdated}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 font-medium">Progress</span>
                        <span className="font-semibold" style={{ color: 'var(--color-darkblue)' }}>{proposal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${proposal.progress}%`,
                            backgroundColor: 'var(--color-darkblue)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Priority Tasks & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions Panel */}
            <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader className="pb-4 px-6 pt-6">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </CardHeader>
              <CardBody className="pt-0 px-6 pb-6 space-y-4">
                <Button
                  onPress={onStartProposal}
                  className="w-full justify-start text-white font-medium px-4 py-3 h-auto rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-quick-purple)' }}
                  startContent={<Plus className="w-4 h-4" />}
                >
                  New Proposal
                </Button>
                <Button
                  variant="bordered"
                  onPress={() => onNavigate?.("clients")}
                  className="w-full justify-start font-medium px-4 py-3 h-auto rounded-lg transition-all duration-200 border-1 hover:bg-teal-50"
                  style={{ 
                    borderColor: 'var(--color-quick-teal)',
                    color: 'var(--color-quick-teal)',
                    backgroundColor: 'transparent'
                  }}
                  startContent={<UserPlus className="w-4 h-4" style={{ color: 'var(--color-quick-teal)' }} />}
                >
                  Add Client
                </Button>
              </CardBody>
            </Card>

            {/* Priority Tasks Widget */}
            <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader className="pb-4 px-6 pt-6">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold text-gray-900">Priority Tasks</h3>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {priorityTasks.length}
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0 px-6 pb-6">
                <div className="space-y-4">
                  {priorityTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-100"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 mb-2">{task.title}</p>
                        <p className="text-sm text-gray-600">{task.client}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        <span className="font-medium">{task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <Card className="border-0 bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="pb-4 px-6 pt-6">
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
                <p className="text-gray-600 mt-1 text-sm">Latest updates from your practice</p>
              </div>
              <Button 
                variant="light" 
                size="sm" 
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 text-gray-600"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardBody className="pt-0 px-6 pb-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-100">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                      <Icon className="w-5 h-5" style={{ color: activity.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 mb-2">{activity.event}</p>
                      <p className="text-sm text-gray-600">{activity.entity}</p>
                    </div>
                    <span className="text-sm text-gray-500 flex-shrink-0 font-medium">{activity.timestamp}</span>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
