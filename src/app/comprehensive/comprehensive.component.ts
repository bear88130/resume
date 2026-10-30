import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-comprehensive',
  templateUrl: './comprehensive.component.html',
  styleUrls: ['./comprehensive.component.scss']
})
export class ComprehensiveComponent {
  @Input
  ({ required: true }) isSimplify: boolean = false;

  @ViewChild('historyBody') historyBody?: ElementRef<HTMLElement>;

  historyYears = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  activeYear = '2014';

  // 點選年份後的平滑捲動期間，不讓捲動追蹤蓋掉使用者選的年份
  private spyLocked = false;
  private spyUnlockTimer?: ReturnType<typeof setTimeout>;

  // 等 Bootstrap modal 淡入完成後再捲動到指定年份
  openYear(year: string) {
    this.activeYear = year;
    setTimeout(() => this.scrollToYear(year, 'auto'), 350);
  }

  scrollToYear(year: string, behavior: ScrollBehavior = 'smooth') {
    const body = this.historyBody?.nativeElement;
    const target = body?.querySelector<HTMLElement>('#history-' + year);
    if (!body || !target) {
      return;
    }
    this.lockSpy(body);
    body.scrollTo({ top: target.offsetTop, behavior });
    this.activeYear = year;
  }

  // 捲動結束（scrollend）才解鎖；目標已在定位不會觸發 scrollend，所以保留逾時備援
  private lockSpy(body: HTMLElement) {
    const unlock = () => {
      this.spyLocked = false;
      clearTimeout(this.spyUnlockTimer);
      body.removeEventListener('scrollend', unlock);
    };
    clearTimeout(this.spyUnlockTimer);
    this.spyLocked = true;
    body.addEventListener('scrollend', unlock, { once: true });
    this.spyUnlockTimer = setTimeout(unlock, 1500);
  }

  onHistoryScroll() {
    const body = this.historyBody?.nativeElement;
    if (!body || this.spyLocked) {
      return;
    }
    // 最後幾年內容較短，捲到底時直接標示最後一年
    if (body.scrollTop + body.clientHeight >= body.scrollHeight - 2) {
      this.activeYear = this.historyYears[this.historyYears.length - 1];
      return;
    }
    const sections = Array.from(body.querySelectorAll<HTMLElement>('.history-year'));
    const current = sections.filter(s => s.offsetTop <= body.scrollTop + 24).pop();
    if (current) {
      this.activeYear = current.id.replace('history-', '');
    }
  }
}
