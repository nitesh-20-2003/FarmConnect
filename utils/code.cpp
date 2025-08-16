#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;


int maxSplits(vector<int>& a, int l, int r) {
    if (r - l <= 1) return 0;

    int total = accumulate(a.begin() + l, a.begin() + r, 0);
    if (total % 2 != 0) return 0;

    int target = total / 2;
    int sum = 0;

    for (int i = l; i < r; ++i) {
        sum += a[i];
        if (sum == target) {
         
            int leftSplits = maxSplits(a, l, i + 1);
            int rightSplits = maxSplits(a, i + 1, r);
            return 1 + max(leftSplits, rightSplits);
        }
    }
    return 0;
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a.begin(), a.end());

    int result = maxSplits(a, 0, n);
    cout << result << endl;

    return 0;
}
